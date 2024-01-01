import { getData } from "@/services";
import { ApiResponse, Setters } from "@/types";

export async function getAllData(
  allData: any,
  currentSelectedTab: string,
  setters: Setters
) {
  const response: ApiResponse = await getData(currentSelectedTab);

  if (currentSelectedTab === "home" && response?.data?.length) {
    setters["home"](response?.data[0]);
  }

  if (currentSelectedTab === "about" && response?.data?.length) {
    setters["about"](response?.data[0]);
  }

  if (response?.statusCode === 200) {
    setters["all"]({
      ...allData,
      [currentSelectedTab]: response?.data,
    });
  }
}
