import { fetchDedicatedOffers } from '@/app/lib/data';
import Image from "next/image";
import Link from "next/link";
import {Button} from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import EventDetailItem from "@/app/ui/dashboard/event-detail-item";

export default async function DedicatedOffers() {
    const offers = await fetchDedicatedOffers();

    function getTypeColor(type: string) {
        switch (type) {
            case "dedykowana-wycieczka-szkolna":
                return "text-secondary-blue";
            default:
                return "";
        }
    }

    function getTypeName(type: string) {
        switch (type) {
            case "dedykowana-wycieczka-szkolna":
                return "Dedykowana wycieczka szkolna";
            default:
                return null;
        }
    }

    const getTripDuration = (startDate: string, endDate: string): string => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const durationInMs = end.getTime() - start.getTime();
        const durationInDays = durationInMs / (1000 * 60 * 60 * 24);

        return `${durationInDays}`;
    };

    return (
        <div className="flex w-full flex-col md:col-span-4">
            <div className="flex items-center justify-between gap-x-3">
                <h3 className="text-3xl font-bold text-primary-blue">
                    Dedykowane oferty
                </h3>
                {offers.length > 2 && <Button
                    variant="text"
                    size="small"
                    sx={{ fontWeight: "bold" }}
                    endIcon={<ArrowForwardIosOutlinedIcon />}
                    aria-label="Zobacz więcej dedykowanych ofert"
                >
                    Więcej
                </Button>}
            </div>

            {offers.length === 0 ? <div className="mt-6">
                <p>Brak dedykowanych ofert</p>
            </div> : <div className="mt-6 bg-white grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {offers.map((offer, i) => {
                    return (
                        <Link key={i}  href="/dashboard/events" className="flex flex-col border group border-gray-200 rounded-md shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
                            <div className="bg-gray-100 h-40 md:h-48 overflow-hidden">
                                {offer.media != null && offer.media.length > 0 && <Image src={offer.media[0].url} alt="" draggable={false} className="min-h-40 md:min-h-48 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" loading="lazy" width={offer.media[0].width} height={offer.media[0].height} />}
                            </div>

                            <div className="h-48 md:h-52 flex flex-col justify-between gap-y-4 p-4">
                                <section className="space-y-1">
                                    <p className={`text-xs md:text-sm font-bold ${getTypeColor(offer.type)}`}>{getTypeName(offer.type)}</p>
                                    <h4 className="text-base md:text-xl font-bold line-clamp-2 text-neutral-800 hover:underline">{offer.name.trim().length > 0 ? offer.name : "Indywidualna wycieczka dla klienta"}</h4>
                                </section>

                                <section className="space-y-1">
                                    {(offer.pickup_collection_date.trim().length > 0 && offer.pickup_return_date.trim().length > 0) &&
                                        <EventDetailItem
                                            icon="/assets/icons/calendar.svg"
                                            text={`${getTripDuration(offer.pickup_collection_date, offer.pickup_return_date)}-dniowa`}
                                        />
                                    }

                                    <div className="flex flex-wrap items-center gap-3">
                                        <EventDetailItem
                                            icon="/assets/icons/user-location.svg"
                                            text={`${offer.location.city} (${offer.location.province}), ${offer.country_name}`}
                                            className="min-w-4 min-h-4"
                                        />

                                        {offer.min_price && <p className="ml-auto mr-0 text-xs font-bold text-primary-blue">
                                            od <span className="text-xl">{Number(offer.min_price).toLocaleString('pl-PL')}</span> {" "}
                                            <span className="align-super text-sm font-normal">zł</span>
                                        </p>}
                                    </div>
                                </section>
                            </div>
                        </Link>
                    )
                })}
            </div>}
        </div>
    );
}