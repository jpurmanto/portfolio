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
    index?: number,
    listItem?: string,
    listItemIndex?: number
  ) => <></>,
  isEditable: ({ itemId, field }: { itemId?: string; field: string }) => false,
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
    return editField?.itemId === itemId && editField?.field === field;
  };

  const setEditColor = ({
    itemId,
    field,
  }: {
    itemId?: string;
    field: string;
  }) => {
    return editField?.itemId === itemId && editField?.field === field
      ? "red"
      : "black";
  };

  const handleChange = (
    e: React.FormEvent<HTMLDivElement>,
    section: string,
    field: string,
    index?: number,
    listItem?: string,
    listItemIndex?: number
  ) => {
    // an item list, nested within a card list
    if (listItem !== undefined) {
      if (index !== undefined) {
        setCurrentData({
          ...currentData,
          [section]: {
            ...currentData[section as keyof AllData],
            [index!]: {
              ...(
                currentData[section as keyof AllData] as {
                  [key: string]: any;
                }
              )[index!],
              [field]: {
                ...(
                  currentData[section as keyof AllData] as {
                    [key: string]: any;
                  }
                )[index!][field],
                [listItemIndex!]: e.currentTarget.innerText,
              },
            },
          },
        });

        // an item list, not nested
      } else {
        setCurrentData({
          ...currentData,
          [section]: {
            ...currentData[section as keyof AllData],
            [field]: {
              ...(
                currentData[section as keyof AllData] as { [key: string]: any }
              )[field],
              [listItemIndex!]: e.currentTarget.innerText,
            },
          },
        });
      }

      // a card, part of a card list
    } else if (index !== undefined) {
      setCurrentData({
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
      });

      // a text only field
    } else {
      setCurrentData({
        ...currentData,
        [section]: {
          ...currentData[section as keyof AllData],
          [field]: e.currentTarget.innerText,
        },
      });
    }
  };

  const handleBlur = (
    e: React.FormEvent<HTMLDivElement>,
    section: string,
    field: string,
    index?: number,
    listItem?: string
  ) => {
    setEditField(undefined);
    let prevData: string;

    // an item list, like tech stack used
    if (listItem !== undefined) {
      prevData = listItem;

      // a card, part of a card list
    } else if (index !== undefined) {
      prevData = (data[section as keyof AllData] as { [key: string]: any })[
        index
      ][field];

      // a text only field
    } else {
      prevData = (data[section as keyof AllData] as { [key: string]: any })[
        field
      ];
    }

    e.currentTarget.innerText = prevData;
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLDivElement>,
    section: string,
    field: string,
    index?: number,
    listItem?: string
  ) => {
    if (e.key === "Escape") {
      handleBlur(e, section, field, index, listItem);
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
    index?: number,
    listItem?: string,
    listItemIndex?: number
  ) => {
    let content: any;

    // an item list, like tech stack used
    if (listItem !== undefined) {
      content = listItem;

      // a card, part of a card list
    } else if (item !== undefined) {
      content = item[field as keyof TimelineInterface];

      // a text only field
    } else {
      content = (data[section as keyof AllData] as { [key: string]: any })[
        field
      ];
    }

    return (
      <p
        key={listItemIndex ?? null}
        contentEditable={isEditable({ itemId: item?._id, field })}
        suppressContentEditableWarning={true}
        className={className}
        onInput={(e) =>
          handleChange(e, section, field, index, listItem, listItemIndex)
        }
        onKeyDown={(e) => handleKeyDown(e, section, field, index, listItem)}
        onBlur={(e) => handleBlur(e, section, field, index, listItem)}
      >
        {content}
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
