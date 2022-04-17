export const getFilteredVideoList = (videos, category) => {
  if (!category) {
    return videos;
  }
  return videos.filter((video) =>
    video.category.includes(category.categoryName.toLowerCase())
  );
};
