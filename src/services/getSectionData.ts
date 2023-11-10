export default async function getSectionData(currentSection: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/${currentSection}/get`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data && data.data;
}
