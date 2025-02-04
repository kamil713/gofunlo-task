"use client"

import {useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import {ReservationsType} from "@/app/lib/definitions";
import Image from "next/image";
import EventDetailItem from "@/app/ui/dashboard/event-detail-item";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <ul
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </ul>
    );
}

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export default function EventsTab({ events }: { events: ReservationsType }) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function getStatusLabel(status: string) {
        return (
            <>
                <label
                    htmlFor={status}
                    className="absolute top-2 left-2 bg-emerald-100 font-medium px-2 py-1 rounded-xl uppercase text-xs hidden sm:block">
                    {status}
                </label>

                <span className="absolute top-2 left-2 bg-emerald-300 shadow-[0_0_12px_rgba(0,0,0,0.3)] shadow-current animate-pulse rounded-full w-3 h-3 inline-block sm:hidden"></span>
            </>
        )
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab icon={<FlagOutlinedIcon />} iconPosition="start" label="Moje rezerwacje" {...a11yProps(0)} />
                    <Tab icon={<HourglassEmptyOutlinedIcon />} iconPosition="start" label="Zakończone" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {events.length === 0 ?  <div className="flex flex-col items-center gap-4 p-4">
                    <h4 className="font-bold">Twoje rezerwacje</h4>
                    <p>Nie masz jeszcze żadnych rezerwacji</p>
                </div> :
                    <>{events.map((event, index) => {
                    const { city, province} = event.product_data.location;

                    return (
                    <li
                        key={index}
                        className="mt-6 md:max-h-64 grid grid-cols-5 rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
                        data-testid={`event-item-${index}`}
                    >
                        <div className="relative col-span-2">
                            {getStatusLabel(event.status_label)}

                            <Image
                                src={event.product_data.main_photo.url}
                                alt={`Obraz dla wycieczki - ${event.trip_name}`}
                                width={event.product_data.main_photo.width}
                                height={event.product_data.main_photo.height}
                                draggable={false}
                                className="h-full object-cover"
                            />
                        </div>

                        <div className="col-span-3 p-4">
                            <p className="text-orange-500 font-bold">{event.product_data.type}</p>

                            <h3 className="my-4 text-xl font-bold line-clamp-2">{event.trip_name}</h3>

                            <div className="flex flex-col gap-y-1">
                                <EventDetailItem
                                    icon="/assets/icons/user-location.svg"
                                    text={`${city}, ${province}, ${event.product_data.country_name}`}
                                />
                                <EventDetailItem
                                    icon="/assets/icons/calendar.svg"
                                    text={`${event.start_date} - ${event.end_date}`}
                                />
                                <EventDetailItem icon="/assets/icons/window.svg" text={event.id} />
                                <EventDetailItem icon="/assets/icons/globe.svg" text={event.company_name} />
                            </div>
                        </div>
                    </li>
                    )}
                    )}</>
                }
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {/* For tests, it's better to disable the tab when it's empty. */}
                <p className="sr-only">Brak danych</p>
            </CustomTabPanel>
        </Box>
    )
}