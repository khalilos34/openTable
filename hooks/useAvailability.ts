import { useState } from "react";
import axios from "axios";
interface IProps {
  slug: string;
  day: string;
  time: string;
  partySize: string;
}
export const useAvailability = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<
    { time: string; availability: boolean }[] | null
  >(null);

  const fetchAvailability = async ({ slug, day, time, partySize }: IProps) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );

      setData(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, data, fetchAvailability };
};
//http://localhost:3000/api/restaurant/otawa/availability?date=2003&time=22222&partySize=14
