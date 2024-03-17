import { calculateReviewRating } from "@/utils/calculations";
import { Review } from "@prisma/client";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Stars = ({ reviews }: { reviews: Review[] }) => {
  const rating = calculateReviewRating(reviews);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((rating - i).toFixed(1));
      if (difference >= 1) {
        stars.push(<IoIosStar size={23} key={i} />);
      } else if (difference > 0) {
        if (difference <= 0.2) {
          stars.push(<IoIosStarOutline size={23} key={i} />);
        } else if (difference <= 0.6) {
          stars.push(<IoIosStarHalf size={23} key={i} />);
        } else {
          stars.push(<IoIosStar size={23} key={i} />);
        }
      } else {
        stars.push(<IoIosStarOutline size={23} key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center">{renderStars().map((star) => star)}</div>
  );
};

export default Stars;
