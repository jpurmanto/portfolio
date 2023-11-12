import { addData, updateData } from "@/services";
import { getAllData, resetFormData } from ".";

export async function saveData(
  currentSelectedTab: string,
  allData: Record<string, any>,
  setters: Setters,
  dataMap: Record<string, any>,
  update: boolean
) {
  const response = update
    ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
    : await addData(currentSelectedTab, dataMap[currentSelectedTab]);

  if (response.success) {
    resetFormData(setters);

    getAllData(allData, currentSelectedTab, setters);
  }
}
