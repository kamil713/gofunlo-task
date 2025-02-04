import { fetchReservations } from "@/app/lib/data";
import EventsTab from "@/app/ui/dashboard/events-tab";
import {ReservationsType} from "@/app/lib/definitions";

export default async function Events() {
    const events: ReservationsType = await fetchReservations();

    return (
        <div className="flex w-full flex-col md:col-span-4">
            <div className="flex items-center justify-between gap-x-3">
                <h3 className="text-3xl font-bold text-primary-blue">
                    Rezerwacje
                </h3>
            </div>

            <EventsTab events={events} />
        </div>
    );
}