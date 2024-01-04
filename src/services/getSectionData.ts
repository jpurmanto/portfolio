export async function getSectionData(currentSection: string) {
  const API_URL =
    process?.env?.NEXT_PUBLIC_API_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000/";

  try {
    const res = await fetch(`${API_URL}/api/${currentSection}`, {
      method: "GET",
      cache: "no-store",
    });

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
