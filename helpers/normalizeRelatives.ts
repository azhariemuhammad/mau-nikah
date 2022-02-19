export const normalizeRelatives = (relatives: Array<string>) => {
  if (!relatives.length) return [];

  return relatives.map((item) => {
    const temp = JSON.parse(item);
    return {
      id: temp.id,
      relative: temp.relative,
    };
  });
};
