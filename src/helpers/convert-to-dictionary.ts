export const convertToDictionary = (techList: string) => {
  let techObj: { [key: number]: string } = {};
  const techArr = techList.split(", ");

  for (let i = 0; i < techArr.length; i++) {
    techObj[i] = techArr[i];
  }

  return techObj;
};
