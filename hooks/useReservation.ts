import { useState } from "react";
import axios from "axios";
interface IProps {
  slug: string;
  date: string;
  time: string;
  partySize: string;
  bookerFirstName: string;
  bookerLastName: string;
  bookerEmail: string;
  bookerPhone: string;
  bookerOccasion: string;
  bookerRequest: string;
}
export const useReservation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    date,
    time,
    partySize,
    bookerFirstName,
    bookerLastName,
    bookerEmail,
    bookerOccasion,
    bookerPhone,
    bookerRequest,
  }: IProps) => {
    const data = {
      bookerFirstName,
      bookerLastName,
      bookerEmail,
      bookerOccasion,
      bookerPhone,
      bookerRequest,
    };
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/restaurant/${slug}/reserve`,
        data,
        {
          params: {
            date,
            time,
            partySize,
          },
        }
      );

      setLoading(false);
      return response.data;
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, createReservation };
};
//http://localhost:3000/api/restaurant/otawa/reserve?date=2003&time=22222&partySize=14
