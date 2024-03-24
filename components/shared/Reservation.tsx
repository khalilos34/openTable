"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useReservation } from "@/hooks/useReservation";
import { Restaurant } from "@/types";

const formSchema = z.object({
  bookerFirstName: z.string().min(2, {
    message: "bookerFirstName must be at least 2 characters.",
  }),
  bookerLastName: z.string().min(2, {
    message: "last name must be at least 2 characters.",
  }),
  bookerEmail: z.string().email("please provide a valid Email"),
  bookerPhone: z
    .string()
    .min(6, { message: "phone number must be at least 6 characters" }),
  bookerOccasion: z.string().optional(),
  bookerRequest: z.string().optional(),
});

const Reservation = ({
  date,
  partySize,
  time,
  slug,
}: {
  date: string;
  partySize: string;
  time: string;
  slug: string;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookerFirstName: "",
      bookerLastName: "",
      bookerEmail: "",
      bookerPhone: "",
      bookerOccasion: "",
      bookerRequest: "",
    },
  });
  const { createReservation, error, loading } = useReservation();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      bookerFirstName,
      bookerLastName,
      bookerEmail,
      bookerPhone,
      bookerOccasion,
      bookerRequest,
    } = values;

    const booking = await createReservation({
      slug,
      partySize,
      time,
      date,
      bookerFirstName,
      bookerLastName,
      bookerEmail,
      bookerPhone,
      bookerOccasion: bookerOccasion || "",
      bookerRequest: bookerRequest || "",
    });
    form.reset();
  }
  const { formState } = form;
  const isFormValid = formState.isValid;

  return (
    <div className="w-full mt-10 border-t shadow-lg p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-4 w-full
        "
        >
          <div className="flex  flex-col md:flex-row items-center justify-between gap-3">
            <FormField
              control={form.control}
              name="bookerFirstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="outline-none ring-white rounded-md "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bookerLastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex  flex-col md:flex-row  items-center justify-between gap-3">
            <FormField
              control={form.control}
              name="bookerEmail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      className="outline-none ring-white rounded-md "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bookerPhone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex  flex-col md:flex-row  items-center justify-between gap-3">
            <FormField
              control={form.control}
              name="bookerOccasion"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Occasion (optional)"
                      {...field}
                      className="outline-none ring-white rounded-md "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bookerRequest"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="any Request (optional)"
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className={`w-1/2 bg-red-600 ${
              !isFormValid && "opacity-50 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!isFormValid || loading}
          >
            {loading ? " ReservationPage.." : "complete reservation"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default Reservation;
