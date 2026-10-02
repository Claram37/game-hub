const getEnglishDescription = (text: string) => {
  if (!text) return "";

  const index = text.indexOf("Español");
  return index === -1 ? text : text.slice(0, index).trim();
};

export default getEnglishDescription;
