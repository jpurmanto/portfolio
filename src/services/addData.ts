export async function addData(
  currentTab: string,
  formData: Record<string, any>
) {
  try {
    const res = await fetch(`/api/${currentTab}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}
