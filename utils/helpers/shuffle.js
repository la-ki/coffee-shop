export const shuffle = (array) => {
  const newArray = [...array];

  newArray.reverse().forEach((item, index) => {
    const j = Math.floor(Math.random() * (index + 1));
    [newArray[index], newArray[j]] = [newArray[j], newArray[index]];
  });

  return newArray;
};
