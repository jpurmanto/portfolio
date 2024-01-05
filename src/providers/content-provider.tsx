"use client";

import { EditButton } from "@/components/ui";
import { updateData } from "@/services";
import { AllData, TimelineInterface } from "@/types";
import React, { createContext, useState } from "react";

const ContentContext = createContext({
  data: {},
  currentData: {},
  setCurrentData: (value: AllData) => {},
  editField: { id: "", field: "" },
  setEditField: (value: { id?: string; field: string } | undefined) => {},
  renderEditButton: ({ itemId, field }: { itemId?: string; field: string }) => (
    <></>
  ),
  renderContent: (
    section: string,
    field: string,
    className: string,
    item?: TimelineInterface,
    index?: number
  ) => <></>,
  isEditable: ({
    itemId,
    field,
  }: {
    itemId?: string;
    field: string;
  }) => false,
});

export const ContentProvider: React.FC<{
  data: AllData;
  children: React.ReactNode;
}> = ({ data, children }): React.ReactNode => {
  const [editField, setEditField] = useState<
    { itemId?: string; field: string } | undefined
  >();
  const [currentData, setCurrentData] = useState(data);

  const isEditable = ({
    itemId,
    field,
  }: {
    itemId?: string;
    field: string;
  }) => {
    return itemId
      ? editField?.itemId === itemId && editField?.field === field
      : editField?.field === field;
  };

  const setEditColor = ({
    itemId,
    field,
  }: {
    itemId?: string;
    field: string;
  }) => {
    return itemId
      ? editField?.itemId === itemId && editField?.field === field
        ? "red"
        : "black"
      : editField?.field === field
      ? "red"
      : "black";
  };

  const handleChange = (
    e: React.FormEvent<HTMLDivElement>,
    section: string,
    field: string,
    index?: number
  ) => {
    index !== undefined
      ? setCurrentData({
          ...currentData,
          [section]: {
            ...currentData[section as keyof AllData],
            [index]: {
              ...(
                currentData[section as keyof AllData] as { [key: string]: any }
              )[index],
              [field]: e.currentTarget.innerText,
            },
          },
        })
      : setCurrentData({
          ...currentData,
          [section]: {
            ...currentData[section as keyof AllData],
            [field]: e.currentTarget.innerText,
          },
        });
  };

  const handleBlur = (
    e: React.FormEvent<HTMLDivElement>,
    section: string,
    field: string,
    index?: number
  ) => {
    setEditField(undefined);
    e.currentTarget.innerText = index !== undefined
      ? (data[section as keyof AllData] as { [key: string]: any })[index][field]
      : (data[section as keyof AllData] as { [key: string]: any })[field];
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLDivElement>,
    section: string,
    field: string,
    index?: number
  ) => {
    // console.log(currentData)
    if (e.key === "Escape") {
      handleBlur(e, section, field, index);
    }
    if (e.key === "Enter") {
      setEditField(undefined);
      await updateData(
        section.toLowerCase(),
        index !== undefined
          ? (currentData[section as keyof AllData] as { [key: string]: any })[
              index
            ]
          : currentData[section as keyof AllData]
      );
    }
  };

  const renderEditButton = ({
    itemId,
    field,
  }: {
    itemId?: string;
    field: string;
  }) => {
    return (
      <EditButton
        field={field}
        color={setEditColor({ itemId, field })}
        handler={() => setEditField({ itemId, field })}
      />
    );
  };

  const renderContent = (
    section: string,
    field: string,
    className: string,
    item?: TimelineInterface,
    index?: number
  ) => {
    return (
      <p
        contentEditable={isEditable({ itemId: item?._id, field })}
        suppressContentEditableWarning={true}
        className={className}
        onInput={(e) => handleChange(e, section, field, index)}
        onKeyDown={(e) => handleKeyDown(e, section, field, index)}
        onBlur={(e) => handleBlur(e, section, field, index)}
      >
        {item
          ? item[field as keyof TimelineInterface]
          : (data[section as keyof AllData] as { [key: string]: any })[field]}
      </p>
    );
  };

  return (
    <ContentContext.Provider
      value={{
        data,
        currentData,
        setCurrentData,
        // @ts-ignore
        editField,
        setEditField,
        renderEditButton,
        renderContent,
        // @ts-ignore
        isEditable,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
