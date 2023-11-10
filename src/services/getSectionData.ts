export async function getSectionData(currentSection: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/${currentSection}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data && data.data;
}
