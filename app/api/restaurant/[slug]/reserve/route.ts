import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const searchParams = new URLSearchParams(url.searchParams);
  const slug = pathname.split("/")[3];
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");

  if (!date || !slug || !time || !partySize)
    return new Response("invalid search");
  const data: { slug: string; date: string; time: string; partySize: string } =
    {
      slug: slug,
      date: date,
      time: time,
      partySize: partySize,
    };

  const restaurant = await db.restaurant.findUnique({
    where: { slug },
  });
  if (!restaurant) return new Response("invalid slug");
  if (
    new Date(`${date}T${time}`) < new Date(`${date}T${restaurant.open_time}`) ||
    new Date(`${date}T${restaurant.close_time}`) < new Date(`${date}T${time}`)
  )
    return new Response("restaurants is closed at this time");

  return NextResponse.json(data);
};

//// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?date=2024-03-22&time=14:30:00.000Z&partySize=2
