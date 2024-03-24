import Reservation from "@/components/shared/Reservation";
import Form from "@/components/shared/Reservation";
import ReservationHeader from "@/components/shared/ReservationHeader";
import { getRestaurantBySlug } from "@/lib/actions/restaurant.actions";

const ReservationPage = async ({
  searchParams,
  params,
}: {
  searchParams: { date: string; partySize: string; time: string };
  params: { slug: string };
}) => {
  const { date, partySize, time } = searchParams;

  const restaurant = await getRestaurantBySlug(params.slug);
  if (!restaurant) return null;
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto flex flex-col items-center justify-center">
        <ReservationHeader
          src={restaurant.main_image}
          slug={params.slug}
          time={time}
          date={date}
          partySize={partySize}
        />
        <Reservation
          slug={params.slug}
          time={time}
          date={date}
          partySize={partySize}
        />
      </div>
    </div>
  );
};

export default ReservationPage;
