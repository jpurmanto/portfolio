export async function deleteData(
  section: string,
  itemId: Record<string, any>
) {
  try {
    const res = await fetch(`/api/${section}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemId),
    });

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}
