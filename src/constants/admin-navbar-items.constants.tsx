import { BaseCMS } from "@/components/cms";
import { Inbox } from "@/components/ui";
import {
  aboutFields,
  experienceFields,
  formationFields,
  homeFields,
  projectsFields,
} from "@/constants/fields";
import { saveData } from "@/helpers";
import { FormField, Setters } from "@/types";

const menubarItems = [
  { name: "home", fields: homeFields, update: true },
  { name: "about", fields: aboutFields, update: true },
  { name: "experience", fields: experienceFields },
  { name: "formation", fields: formationFields },
  { name: "projects", fields: projectsFields },
];

const formComponent = (
  componentName: string,
  componentField: FormField[],
  currentSelectedTab: string,
  allData: Record<string, any>,
  setters: Setters,
  dataMap: Record<string, any>,
  update?: boolean
) => {
  return (
    <BaseCMS
      fields={componentField}
      formData={dataMap[componentName]}
      // @ts-ignore
      setFormData={setters[componentName]}
      handleSaveData={async () =>
        await saveData(
          currentSelectedTab,
          allData,
          setters,
          dataMap,
          update ?? false
        )
      }
    />
  );
};

export const adminNavbarItems = (
  currentSelectedTab: string,
  allData: Record<string, any>,
  setters: Setters,
  dataMap: Record<string, any>
): {
  id: string;
  label: string;
  update?: boolean;
  component: React.ReactElement;
}[] => {
  const menuItems = [
    ...menubarItems.map((item) => {
      return {
        id: item.name,
        label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
        update: item.update,
        component: formComponent(
          item.name,
          item.fields,
          currentSelectedTab,
          allData,
          setters,
          dataMap,
          item.update
        ),
      };
    }),
    {
      id: "contact",
      label: "Contact",
      update: false,
      component: <Inbox data={allData && allData?.contact} />,
    },
  ];

  return menuItems;
};
