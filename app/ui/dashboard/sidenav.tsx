"use client"

import Link from "next/link";
import {Typography} from "@mui/material";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { usePathname } from 'next/navigation'

const mockedlinks = [
    {
        name: 'Moje dane',
        href: '/dashboard',
        icon: PersonOutlinedIcon
    },
    {
        name: 'Wiadomości',
        href: '/dashboard/messages',
        icon: ChatOutlinedIcon
    },
    {
      name: 'Dedykowane oferty',
      href: '/dashboard/offers',
      icon: LocalOfferOutlinedIcon,
    },
    {
        name: 'Rezerwacje',
        href: '/dashboard/events',
        icon: CalendarTodayOutlinedIcon
    },
    {
        name: 'Wyloguj się',
        href: '/',
        icon: LogoutOutlinedIcon
    },
]

export default function SideNav() {
    const pathname = usePathname()

    return (
        <ul className="flex h-full flex-col gap-6 p-5">
            <Typography variant="h4" component="h2" sx={{fontWeight: "bold", color: "#042675"}}>
                Moje konto
            </Typography>

            {mockedlinks.map((link, i) => {
                const LinkIcon = link.icon;
                const isActive = pathname === link.href;

                return (<Link key={i} href={link.href}
                      className={`group 
                       px-2 py-3 rounded-md transition-colors duration-300 ease-in-out ${isActive ? "bg-blue-50" : "hover:bg-blue-50"}`}>
                    <li className={`flex items-center gap-x-3 transition-colors duration-300 ease-in-out 
                            ${isActive ? "text-blue-700" : "group-hover:text-blue-700"}`}>
                        <LinkIcon fontSize="small" />
                        <Typography variant="body1" sx={{fontWeight: "bold"}}>{link.name}</Typography>
                    </li>
                </Link>)
            })}
        </ul>
    );
}