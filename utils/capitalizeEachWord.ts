export const capitalizeEachWord = (sentence: string) => {
  if (!sentence) return '';
  const words = sentence.toLocaleLowerCase().split(' ');

  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};
