export async function getData(currentTab: string) {
  try {
    const response = await fetch(`/api/${currentTab}`, {
      method: "GET",
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}
