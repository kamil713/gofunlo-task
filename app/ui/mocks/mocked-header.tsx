import Image from "next/image";
import Link from "next/link";

export default function MockedHeader() {
    return (
        <header className="p-0 lg:p-8 lg:pb-0 top-0 lg:top-8 z-[140] w-full shadow-md">
            <div className="lg:container mx-auto flex items-center w-full gap-5 xl:gap-8 xl:max-w-screen-xl">
                <div className="hidden lg:flex items-center flex-shrink-0">
                    <Link href="/">
                        <Image src="/assets/logos/gofunlo.svg"
                               priority={true}
                               alt="" width={150} height={27}
                               className="cursor-pointer"/>
                    </Link>
                </div>
                <div className="hidden lg:flex w-full">
                    <nav className="z-50 w-full">
                        <ul className="flex flex-col lg:hidden items-start gap-4 px-4">
                            <li className="relative w-full border-t border-gray-200 last:border-none">
                                <div className="flex justify-between items-center py-4">
                                    <button
                                        className="flex items-center text-lg font-bold text-gray-800 hover:text-blue-500 focus:outline-none bg-transparent border-none p-0"
                                        aria-haspopup="true" aria-expanded="false">Obozy
                                    </button>
                                    <button
                                        className="ml-4 flex items-center justify-center focus:outline-none bg-transparent border-none p-0"
                                        aria-label="Toggle submenu">
                                        <svg width="24" height="24" viewBox="0 0 17 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.7987 11.47H8.7987V8.70336H11.582V7.70336H8.7987V4.80336H7.7987V7.70336H4.91536V8.70336H7.7987V11.47ZM8.2487 14.8034C7.33759 14.8034 6.47648 14.6284 5.66536 14.2784C4.85425 13.9284 4.14592 13.4506 3.54036 12.845C2.93481 12.2395 2.45703 11.5311 2.10703 10.72C1.75703 9.90892 1.58203 9.04225 1.58203 8.12003C1.58203 7.20892 1.75703 6.34781 2.10703 5.5367C2.45703 4.72559 2.93481 4.02003 3.54036 3.42003C4.14592 2.82003 4.85425 2.34503 5.66536 1.99503C6.47648 1.64503 7.34314 1.47003 8.26536 1.47003C9.17648 1.47003 10.0376 1.64503 10.8487 1.99503C11.6598 2.34503 12.3654 2.82003 12.9654 3.42003C13.5654 4.02003 14.0404 4.72559 14.3904 5.5367C14.7404 6.34781 14.9154 7.21448 14.9154 8.1367C14.9154 9.04781 14.7404 9.90892 14.3904 10.72C14.0404 11.5311 13.5654 12.2395 12.9654 12.845C12.3654 13.4506 11.6598 13.9284 10.8487 14.2784C10.0376 14.6284 9.17092 14.8034 8.2487 14.8034ZM8.26536 13.8034C9.83203 13.8034 11.1654 13.2506 12.2654 12.145C13.3654 11.0395 13.9154 9.69781 13.9154 8.12003C13.9154 6.55337 13.3654 5.22003 12.2654 4.12003C11.1654 3.02003 9.82648 2.47003 8.2487 2.47003C6.68203 2.47003 5.34592 3.02003 4.24036 4.12003C3.13481 5.22003 2.58203 6.55892 2.58203 8.1367C2.58203 9.70336 3.13481 11.0395 4.24036 12.145C5.34592 13.2506 6.68759 13.8034 8.26536 13.8034Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className="relative w-full border-t border-gray-200 last:border-none">
                                <div className="flex justify-between items-center py-4">
                                    <button
                                        className="flex items-center text-lg font-bold text-gray-800 hover:text-blue-500 focus:outline-none bg-transparent border-none p-0"
                                        aria-haspopup="true" aria-expanded="false">Półkolonie
                                    </button>
                                    <button
                                        className="ml-4 flex items-center justify-center focus:outline-none bg-transparent border-none p-0"
                                        aria-label="Toggle submenu">
                                        <svg width="24" height="24" viewBox="0 0 17 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.7987 11.47H8.7987V8.70336H11.582V7.70336H8.7987V4.80336H7.7987V7.70336H4.91536V8.70336H7.7987V11.47ZM8.2487 14.8034C7.33759 14.8034 6.47648 14.6284 5.66536 14.2784C4.85425 13.9284 4.14592 13.4506 3.54036 12.845C2.93481 12.2395 2.45703 11.5311 2.10703 10.72C1.75703 9.90892 1.58203 9.04225 1.58203 8.12003C1.58203 7.20892 1.75703 6.34781 2.10703 5.5367C2.45703 4.72559 2.93481 4.02003 3.54036 3.42003C4.14592 2.82003 4.85425 2.34503 5.66536 1.99503C6.47648 1.64503 7.34314 1.47003 8.26536 1.47003C9.17648 1.47003 10.0376 1.64503 10.8487 1.99503C11.6598 2.34503 12.3654 2.82003 12.9654 3.42003C13.5654 4.02003 14.0404 4.72559 14.3904 5.5367C14.7404 6.34781 14.9154 7.21448 14.9154 8.1367C14.9154 9.04781 14.7404 9.90892 14.3904 10.72C14.0404 11.5311 13.5654 12.2395 12.9654 12.845C12.3654 13.4506 11.6598 13.9284 10.8487 14.2784C10.0376 14.6284 9.17092 14.8034 8.2487 14.8034ZM8.26536 13.8034C9.83203 13.8034 11.1654 13.2506 12.2654 12.145C13.3654 11.0395 13.9154 9.69781 13.9154 8.12003C13.9154 6.55337 13.3654 5.22003 12.2654 4.12003C11.1654 3.02003 9.82648 2.47003 8.2487 2.47003C6.68203 2.47003 5.34592 3.02003 4.24036 4.12003C3.13481 5.22003 2.58203 6.55892 2.58203 8.1367C2.58203 9.70336 3.13481 11.0395 4.24036 12.145C5.34592 13.2506 6.68759 13.8034 8.26536 13.8034Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className="relative w-full border-t border-gray-200 last:border-none">
                                <div className="flex justify-between items-center py-4">
                                    <button
                                        className="flex items-center text-lg font-bold text-gray-800 hover:text-blue-500 focus:outline-none bg-transparent border-none p-0"
                                        aria-haspopup="true" aria-expanded="false">Wycieczki szkolne
                                    </button>
                                    <button
                                        className="ml-4 flex items-center justify-center focus:outline-none bg-transparent border-none p-0"
                                        aria-label="Toggle submenu">
                                        <svg width="24" height="24" viewBox="0 0 17 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.7987 11.47H8.7987V8.70336H11.582V7.70336H8.7987V4.80336H7.7987V7.70336H4.91536V8.70336H7.7987V11.47ZM8.2487 14.8034C7.33759 14.8034 6.47648 14.6284 5.66536 14.2784C4.85425 13.9284 4.14592 13.4506 3.54036 12.845C2.93481 12.2395 2.45703 11.5311 2.10703 10.72C1.75703 9.90892 1.58203 9.04225 1.58203 8.12003C1.58203 7.20892 1.75703 6.34781 2.10703 5.5367C2.45703 4.72559 2.93481 4.02003 3.54036 3.42003C4.14592 2.82003 4.85425 2.34503 5.66536 1.99503C6.47648 1.64503 7.34314 1.47003 8.26536 1.47003C9.17648 1.47003 10.0376 1.64503 10.8487 1.99503C11.6598 2.34503 12.3654 2.82003 12.9654 3.42003C13.5654 4.02003 14.0404 4.72559 14.3904 5.5367C14.7404 6.34781 14.9154 7.21448 14.9154 8.1367C14.9154 9.04781 14.7404 9.90892 14.3904 10.72C14.0404 11.5311 13.5654 12.2395 12.9654 12.845C12.3654 13.4506 11.6598 13.9284 10.8487 14.2784C10.0376 14.6284 9.17092 14.8034 8.2487 14.8034ZM8.26536 13.8034C9.83203 13.8034 11.1654 13.2506 12.2654 12.145C13.3654 11.0395 13.9154 9.69781 13.9154 8.12003C13.9154 6.55337 13.3654 5.22003 12.2654 4.12003C11.1654 3.02003 9.82648 2.47003 8.2487 2.47003C6.68203 2.47003 5.34592 3.02003 4.24036 4.12003C3.13481 5.22003 2.58203 6.55892 2.58203 8.1367C2.58203 9.70336 3.13481 11.0395 4.24036 12.145C5.34592 13.2506 6.68759 13.8034 8.26536 13.8034Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <li className="relative w-full border-t border-gray-200 last:border-none">
                                <div className="flex justify-between items-center py-4"><a
                                    className="block text-lg font-bold text-gray-800 hover:text-blue-500"
                                    href="/pl/p/atrakcje">Atrakcje</a></div>
                            </li>
                            <li className="relative w-full border-t border-gray-200 last:border-none">
                                <div className="flex justify-between items-center py-4">
                                    <button
                                        className="flex items-center text-lg font-bold text-gray-800 hover:text-blue-500 focus:outline-none bg-transparent border-none p-0"
                                        aria-haspopup="true" aria-expanded="false">Noclegi dla grup
                                    </button>
                                    <button
                                        className="ml-4 flex items-center justify-center focus:outline-none bg-transparent border-none p-0"
                                        aria-label="Toggle submenu">
                                        <svg width="24" height="24" viewBox="0 0 17 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.7987 11.47H8.7987V8.70336H11.582V7.70336H8.7987V4.80336H7.7987V7.70336H4.91536V8.70336H7.7987V11.47ZM8.2487 14.8034C7.33759 14.8034 6.47648 14.6284 5.66536 14.2784C4.85425 13.9284 4.14592 13.4506 3.54036 12.845C2.93481 12.2395 2.45703 11.5311 2.10703 10.72C1.75703 9.90892 1.58203 9.04225 1.58203 8.12003C1.58203 7.20892 1.75703 6.34781 2.10703 5.5367C2.45703 4.72559 2.93481 4.02003 3.54036 3.42003C4.14592 2.82003 4.85425 2.34503 5.66536 1.99503C6.47648 1.64503 7.34314 1.47003 8.26536 1.47003C9.17648 1.47003 10.0376 1.64503 10.8487 1.99503C11.6598 2.34503 12.3654 2.82003 12.9654 3.42003C13.5654 4.02003 14.0404 4.72559 14.3904 5.5367C14.7404 6.34781 14.9154 7.21448 14.9154 8.1367C14.9154 9.04781 14.7404 9.90892 14.3904 10.72C14.0404 11.5311 13.5654 12.2395 12.9654 12.845C12.3654 13.4506 11.6598 13.9284 10.8487 14.2784C10.0376 14.6284 9.17092 14.8034 8.2487 14.8034ZM8.26536 13.8034C9.83203 13.8034 11.1654 13.2506 12.2654 12.145C13.3654 11.0395 13.9154 9.69781 13.9154 8.12003C13.9154 6.55337 13.3654 5.22003 12.2654 4.12003C11.1654 3.02003 9.82648 2.47003 8.2487 2.47003C6.68203 2.47003 5.34592 3.02003 4.24036 4.12003C3.13481 5.22003 2.58203 6.55892 2.58203 8.1367C2.58203 9.70336 3.13481 11.0395 4.24036 12.145C5.34592 13.2506 6.68759 13.8034 8.26536 13.8034Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <ul className="hidden lg:flex items-center gap-6">
                            <li className="relative group">
                                <div className="flex items-center py-4 hover:text-blue-500"><a
                                    className="text-base font-medium text-gray-700 hover:text-blue-500"
                                    href="/pl/p/obozy-wszystkie">Obozy</a></div>
                                <div
                                    className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex">
                                        <div className="p-4 min-w-[200px] ">
                                            <ul className="space-y-2">
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/obozy-wszystkie">Wszystkie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/lato">LATO 2025</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/zima">ZIMA 2025</a></li>
                                                <li className="relative group"><span
                                                    className="text-sm block p-2 hover:bg-blue-100 hover:text-blue-500 rounded transition-colors duration-200">Dokąd</span>
                                                </li>
                                                <li className="relative group"><span
                                                    className="text-sm block p-2 hover:bg-blue-100 hover:text-blue-500 rounded transition-colors duration-200">Wiek</span>
                                                </li>
                                                <li className="relative group"><span
                                                    className="text-sm block p-2 hover:bg-blue-100 hover:text-blue-500 rounded transition-colors duration-200">Tematyczne</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="relative group">
                                <div className="flex items-center py-4 hover:text-blue-500"><a
                                    className="text-base font-medium text-gray-700 hover:text-blue-500"
                                    href="/pl/p/polkolonie">Półkolonie</a></div>
                                <div
                                    className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex">
                                        <div className="p-4 min-w-[200px] ">
                                            <ul className="space-y-2">
                                                <li className="relative group"><span
                                                    className="text-sm block p-2 font-semibold text-gray-600">Województwa</span>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/polkolonie-mazowieckie">Mazowieckie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/polkolonie-pomorskie">Pomorskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/polkolonie-kujawsko-pomorskie">Kujawsko-Pomorskie</a>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/polkolonie-wielkopolskie">Wielkopolskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/polkolonie-dolnoslaskie">Dolnośląskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/polkolonie-lubuskie">Lubuskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/polkolonie-slaskie">Śląskie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="relative group">
                                <div className="flex items-center py-4 hover:text-blue-500"><a
                                    className="text-base font-medium text-gray-700 hover:text-blue-500"
                                    href="/pl/p/wycieczki-szkolne">Wycieczki szkolne</a></div>
                                <div
                                    className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex">
                                        <div className="p-4 min-w-[200px] ">
                                            <ul className="space-y-2">
                                                <li className="relative group"><span
                                                    className="text-sm block p-2 font-semibold text-gray-600">Polska</span>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-w-gory">Góry</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-nad-morze">Nad morze</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-dolnoslaskie">Dolnośląskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-kujawsko-pomorskie">Kujawsko-Pomorskie</a>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-lubelskie">Lubelskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-lubuskie">Lubuskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-lodzkie">Łódzkie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-malopolskie">Małopolskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-mazowieckie">Mazowieckie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-opolskie">Opolskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-podkarpackie">Podkarpackie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-podlaskie">Podlaskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-pomorskie">Pomorskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-slaskie">Śląskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-swietokrzyskie">Świętokrzyskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-warminsko-mazurskie">Warmińsko-Mazurskie</a>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-wielkopolskie">Wielkopolskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-zachodniopomorskie">Zachodniopomorskie</a>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-zagraniczne">Za granicą</a></li>
                                                <li className="relative group"><span
                                                    className="text-sm block p-2 font-semibold text-gray-600">Według wieku</span>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-dla-przedszkoli">Dla przedszkolaków</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/wycieczki-dla-szkol">Dla szkół</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/blog/lista-firm-transportowych">Transport</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="relative group">
                                <div className="flex items-center py-4 hover:text-blue-500"><a
                                    className="text-base font-medium text-gray-700 hover:text-blue-500"
                                    href="/pl/p/atrakcje">Atrakcje</a></div>
                            </li>
                            <li className="relative group">
                                <div className="flex items-center py-4 hover:text-blue-500"><a
                                    className="text-base font-medium text-gray-700 hover:text-blue-500"
                                    href="/pl/p/noclegi-dla-grup">Noclegi dla grup</a></div>
                                <div
                                    className="absolute left-0 top-full bg-white shadow-lg border border-gray-200 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex">
                                        <div className="p-4 min-w-[200px] ">
                                            <ul className="space-y-2">
                                                <li className="relative group"><span
                                                    className="text-sm block p-2 font-semibold text-gray-600">Województwa</span>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-pomorskim">Pomorskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-zachodniopomorskim">Zachodniopomorskie</a>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-slaskim">Śląskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-dolnoslaskim">Dolnośląskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-malopolskim">Małopolskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-opolskim">Opolskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-warminsko-mazurskim">Warmińsko-mazurskie</a>
                                                </li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-swietokrzyskim">Świętokrzyskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-podkarpackim">Podkarpackie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-lodzkim">Łódzkie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-lubuskim">Lubuskie</a></li>
                                                <li className="relative group"><a
                                                    className="text-sm block p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-colors duration-200"
                                                    href="/pl/p/noclegi-w-mazowieckim">Mazowieckie</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="ml-auto flex items-center gap-6">
                                <div>
                                    <div className="flex items-center cursor-pointer" role="button" tabIndex={0}>
                                        <div className="w-8 h-8">
                                            <Image src="/assets/langs/pl.png" width="32" height="32"
                                              className="w-full h-full" alt="pl"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center cursor-pointer" role="button" tabIndex={0}>
                                        <b>ZŁ</b></div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden lg:flex ml-auto">
                    <div className="flex flex-row items-center">
                        <div className="">
                            <div className="flex items-center relative">
                                <div className=" cursor-pointer flex gap-2 items-center">
                                    <div
                                        className="rounded-full min-w-[32px] min-h-[32px] lg:min-w-[40px] lg:min-h-[40px] border border-black flex flex-row items-center justify-center text-black text-lg font-bold">
                                        <div>U</div>
                                    </div>
                                    <div className="hidden lg:block overflow-hidden"><p
                                        className="font-bold tracking-[0.01em] leading-none truncate">User</p><p
                                        className="text-xs tracking-[0.01em] leading-none mt-1 truncate">user@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" false top-0 flex lg:hidden bg-white w-full justify-between h-16 shadow-md">
                    <div className="flex items-center ml-4">
                        <div className="flex items-center gap-6 w-full">
                            <Link className="flex-shrink-0" href="/">
                                <Image src="/assets/logos/gofunlo.svg" alt="" priority={true} width={150} height={27} className="cursor-pointer"/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center cursor-pointer mr-3">
                        <div className="flex gap-3 items-center mr-4">
                            <div>
                                <div className="flex items-center cursor-pointer" role="button" tabIndex={0}>
                                    <div className="w-8 h-8">
                                        <Image src="/assets/langs/pl.png" width={32} height={32} className="w-full h-full" alt="pl"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center cursor-pointer" role="button" tabIndex={0}><b>ZŁ</b>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="">
                                <div className="flex items-center relative">
                                    <div className=" cursor-pointer flex gap-2 items-center">
                                        <div
                                            className="rounded-full min-w-[32px] min-h-[32px] lg:min-w-[40px] lg:min-h-[40px] border border-black flex flex-row items-center justify-center text-black text-lg font-bold">
                                            <div>U</div>
                                        </div>
                                        <div className="hidden lg:block overflow-hidden"><p
                                            className="font-bold tracking-[0.01em] leading-none truncate">User</p><p
                                            className="text-xs tracking-[0.01em] leading-none mt-1 truncate">user@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden items-center mr-5">
                        <div className="cursor-pointer">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_286_5182)">
                                    <path d="M26.3688 5.96484H4.61877V7.77734H26.3688V5.96484Z" fill="#363636"></path>
                                    <path d="M26.3688 22.2773H4.61877V24.0898H26.3688V22.2773Z" fill="#363636"></path>
                                    <path d="M26.3688 14.1211H4.61877V15.9336H26.3688V14.1211Z" fill="#363636"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_286_5182">
                                        <rect width="29" height="29" fill="white"
                                              transform="translate(0.993774 0.527344)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}