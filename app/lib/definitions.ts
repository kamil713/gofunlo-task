import {fetchReservations} from "../lib/data";

export type ReservationsType = Awaited<ReturnType<typeof fetchReservations>>;