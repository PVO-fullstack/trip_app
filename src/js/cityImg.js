import cities from "@/data/cities.json";

export const cityImg = (city) => {
  const img = cities.filter((item) => item.city === city);
  return img[0].img;
};
