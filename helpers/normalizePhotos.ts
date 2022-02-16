export const normalizePhotos = (photos: Array<string>) => {
  if (!photos.length) return [];

  return photos.map((item) => {
    const temp = JSON.parse(item);
    return {
      id: temp.id,
      imageUrl: temp.image_url,
    };
  });
};
