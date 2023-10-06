export const getNameInitials = (text: string) => {
  return text
    ?.split(" ")
    .map((item) => item.charAt(0))
    .join("");
};

export const NameInitials = (text: string) => {
  return text
    ?.split(" ")
    .map((item) => item.charAt(0))
    .join("");
};
