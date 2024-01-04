"use client";

import { LoginForm } from "@/components/forms";
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
import AuthContext from "@/providers/auth-provider";
import { Setters } from "@/types";
import { useContext, useEffect, useState } from "react";

export default function AdminView() {
  const { authUser, setAuthUser } = useContext(AuthContext);

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

  if (!authUser)
    return (
      <LoginForm
        formData={loginFormData}
        handleLogin={() => handleLogin(loginFormData, setAuthUser)}
        setFormData={setLoginFormData}
      />
    );

  return (
    <main>
      <nav className="-mb-0.5 flex justify-center spcae-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
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
    </main>
  );
}
