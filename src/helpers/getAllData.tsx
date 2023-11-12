import { AboutInterface, HomeInterface } from "@/db";
import { getData } from "@/services";

export async function getAllData(
  allData: any,
  currentSelectedTab: string,
  setters: Setters
) {
  const response = await getData(currentSelectedTab);

  if (
    currentSelectedTab === "home" &&
    response &&
    response.data &&
    response.data.length
  ) {
    setters["home"](response && response.data[0]);
    setters["update"](true);
  }

  if (
    currentSelectedTab === "about" &&
    response &&
    response.data &&
    response.data.length
  ) {
    setters["about"](response && response.data[0]);
    setters["update"](true);
  }

  if (response?.success) {
    setters["all"]({
      ...allData,
      [currentSelectedTab]: response && response.data,
    });
  }
}
