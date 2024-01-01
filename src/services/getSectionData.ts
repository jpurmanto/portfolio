export async function getSectionData(currentSection: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/${currentSection}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const { data } = await res.json();
    const output = ["home", "about"].includes(currentSection) ? data[0] : data.reverse();

    return output;
  } catch (error) {
    console.error(error);
  }
}
