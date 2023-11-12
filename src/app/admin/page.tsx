"use client";

import { LoginCMS } from "@/components/cms";
import {
  initialAboutFormData,
  initialExperienceFormData,
  initialFormationFormData,
  initialHomeFormData,
  initialLoginFormData,
  initialProjectFormData,
  menuItemsList,
} from "@/constants";
import { getAllData, handleLogin, resetFormData } from "@/helpers";
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
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectFormData
  );
  const [allData, setAllData] = useState<Record<string, any>>({});
  const [update, setUpdate] = useState<boolean>(false);
  const [authUser, setAuthUser] = useState<boolean>(false);

  const setters: Setters = {
    all: setAllData,
    about: setAboutViewFormData,
    experience: setExperienceViewFormData,
    formation: setFormationViewFormData,
    home: setHomeViewFormData,
    login: setLoginFormData,
    project: setProjectViewFormData,
    update: setUpdate,
  };

  const dataMap: Record<string, any> = {
    home: homeViewFormData,
    about: aboutViewFormData,
    formation: formationViewFormData,
    experience: experienceViewFormData,
    project: projectViewFormData,
  };

  const menuItems = menuItemsList(
    currentSelectedTab,
    allData,
    setters,
    dataMap,
    update
  );

  useEffect(() => {
    getAllData(allData, currentSelectedTab, setters);
  }, [currentSelectedTab]);

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")!));
  }, []);

  if (!authUser)
    return (
      <LoginCMS
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
              setCurrentSelectedTab(item.id);
              resetFormData(setters);
              setUpdate(false);
            }}
          >
            {item.label}
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
          (item) => item.id === currentSelectedTab && item.component
        )}
      </div>
    </div>
  );
}
