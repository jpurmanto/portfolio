"use client";

import { LoginView } from "@/components/views";
import { adminNavbarItems } from "@/constants";
import {
  initialAboutFormData,
  initialExperienceFormData,
  initialFormationFormData,
  initialHomeFormData,
  initialLoginFormData,
  initialProjectFormData,
} from "@/constants/fields";
import { getAllData, handleLogin } from "@/helpers";
import { Setters } from "@/types";
import { useEffect, useState } from "react";

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<string>("home");
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceFormData
  );
  const [formationViewFormData, setFormationViewFormData] = useState(
    initialFormationFormData
  );
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const [projectsViewFormData, setProjectsViewFormData] = useState(
    initialProjectFormData
  );
  const [allData, setAllData] = useState<Record<string, any>>({});
  const [authUser, setAuthUser] = useState<boolean>(false);

  const setters: Setters = {
    all: setAllData,
    about: setAboutViewFormData,
    experience: setExperienceViewFormData,
    formation: setFormationViewFormData,
    home: setHomeViewFormData,
    login: setLoginFormData,
    projects: setProjectsViewFormData,
  };

  const dataMap: Record<string, any> = {
    home: homeViewFormData,
    about: aboutViewFormData,
    formation: formationViewFormData,
    experience: experienceViewFormData,
    projects: projectsViewFormData,
  };

  const menuItems: {
    id: string;
    label: string;
    update?: boolean;
    component: React.ReactElement;
  }[] = adminNavbarItems(currentSelectedTab, allData, setters, dataMap);

  useEffect(() => {
    getAllData(allData, currentSelectedTab, setters);
  }, [currentSelectedTab]);

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")!));
  }, []);

  if (!authUser)
    return (
      <LoginView
        formData={loginFormData}
        handleLogin={() => handleLogin(loginFormData, setAuthUser)}
        setFormData={setLoginFormData}
      />
    );

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center spcae-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id ?? currentSelectedTab);
            }}
          >
            {item?.label}
          </button>
        ))}
        <button
          onClick={() => {
            setAuthUser(false);
            sessionStorage.removeItem("authUser");
          }}
          className="p-4 font-bold text-xl text-black"
        >
          Logout
        </button>
      </nav>
      <div className="mt-10 p-10">
        {menuItems.map(
          (item) =>
            item.id === currentSelectedTab && (
              <div key={item.id}>{item.component}</div>
            )
        )}
      </div>
    </div>
  );
}
