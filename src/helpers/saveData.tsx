import { addData, updateData } from "@/services";
import { ApiResponse, Setters } from "@/types";
import { getAllData, resetFormData } from ".";

export async function saveData(
  currentSelectedTab: string,
  allData: Record<string, any>,
  setters: Setters,
  dataMap: Record<string, any>,
  update: boolean
) {
  const response: ApiResponse = update
    ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
    : await addData(currentSelectedTab, dataMap[currentSelectedTab]);

  if (response?.statusCode === 200) {
    resetFormData(setters);

    getAllData(allData, currentSelectedTab, setters);
  }
}
