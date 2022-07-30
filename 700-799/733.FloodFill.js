var floodFill = function (image, sr, sc, newColor) {
  const current = image[sr][sc];

  if (current === newColor) {
    return image;
  }

  image[sr][sc] = newColor;

  if (image[sr - 1] !== undefined && image[sr - 1][sc] === current) {
    floodFill(image, sr - 1, sc, newColor);
  }
  if (image[sr][sc - 1] !== undefined && image[sr][sc - 1] === current) {
    floodFill(image, sr, sc - 1, newColor);
  }
  if (image[sr + 1] !== undefined && image[sr + 1][sc] === current) {
    floodFill(image, sr + 1, sc, newColor);
  }
  if (image[sr][sc + 1] !== undefined && image[sr][sc + 1] === current) {
    floodFill(image, sr, sc + 1, newColor);
  }

  return image;
};
