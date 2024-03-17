import { Review } from "@prisma/client";

export const calculateReviewRating = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  const rating =
    reviews.reduce((total, value) => total + value.rating, 0) / reviews.length;
  return rating;
};
