export async function updateData(
  section: string,
  data: Record<string, any>
) {
  try {
    const response = await fetch(`/api/${section}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}
