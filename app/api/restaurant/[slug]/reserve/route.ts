import { db } from "@/config/db";
import { times } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const searchParams = new URLSearchParams(url.searchParams);

  const slug = pathname.split("/")[3];
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const {
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequest,
  } = await req.json();
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
    select: { tables: true, open_time: true, close_time: true, id: true },
  });
  if (!restaurant) return new Response("invalid slug");
  if (
    new Date(`${date}T${time}`) < new Date(`${date}T${restaurant.open_time}`) ||
    new Date(`${date}T${restaurant.close_time}`) < new Date(`${date}T${time}`)
  )
    return new Response("restaurants is closed at this time");

  const searchTime = times.find((t) => t.time === time)?.searchTime;
  if (!searchTime) return NextResponse.json({ error: "invalid parameters" });
  const tables = restaurant.tables;
  const searchTimeswithTables = searchTime.map((searchTime) => {
    return {
      date: new Date(`${date}T${searchTime}`),
      searchTime,
      tables,
    };
  });
  if (!searchTimeswithTables) return new Response("no results found");
  const searchthespecificTimeWithTable = searchTimeswithTables.find((t) => {
    return t.searchTime === time;
  });
  if (!searchthespecificTimeWithTable) return new Response("No results found");
  const tablesCount: {
    2: number[];
    4: number[];
  } = {
    2: [],
    4: [],
  };
  searchthespecificTimeWithTable.tables.forEach((table) => {
    table.seats === 2
      ? tablesCount[2].push(table.id)
      : tablesCount[4].push(table.id);
  });
  const tableToBook: number[] = [];
  let seatRemaining = parseInt(partySize);
  while (seatRemaining > 0) {
    if (seatRemaining >= 3) {
      if (tablesCount[4].length) {
        tableToBook.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatRemaining -= 4;
      } else {
        tableToBook.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatRemaining -= 2;
      }
    } else {
      if (tablesCount[2].length) {
        tableToBook.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatRemaining -= 2;
      } else {
        tableToBook.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatRemaining -= 4;
      }
    }
  }
  const booking = await db.booking.create({
    data: {
      booking_time: new Date(`${date}T${time}`),
      number_of_people: parseInt(partySize),
      booker_email: bookerEmail,
      booker_phone: bookerPhone,
      booker_first_name: bookerFirstName,
      booker_last_name: bookerLastName,
      booker_occasion: bookerOccasion,
      booker_request: bookerRequest,
      restaurant_id: restaurant.id,
    },
  });

  const bookingsOnTablesData = tableToBook.map((table_id) => {
    return {
      table_id: table_id,
      booking_id: booking.id,
    };
  });
  await db.bookinsgOnTables.createMany({
    data: bookingsOnTablesData,
  });

  return NextResponse.json(booking);
};

//// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?date=2024-03-22&time=14:30:00.000Z&partySize=2
