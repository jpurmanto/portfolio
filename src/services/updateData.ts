export async function updateData(
  currentTab: string,
  formData: Record<string, any>
) {
  try {
    const response = await fetch(`/api/${currentTab}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}
