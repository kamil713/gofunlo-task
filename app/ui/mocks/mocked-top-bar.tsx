export default function MockedTopBar() {
    return (
        <div className="hidden lg:flex bg-[#F8F8FA] absolute left-0 top-0 right-0">
            <div className="lg:container mx-auto flex items-center w-full gap-5 xl:gap-8 xl:max-w-screen-xl h-[32px]">
                <ul className="flex gap-5 mt-1 justify-end mx-auto w-full">
                    <li><a className="text-xs flex gap-3 items-center cursor-pointer" href="tel:+48786823320">
                        <img src="/assets/icons/phone.svg" width="12"/>
                        <span>+48 786 823 320</span>
                    </a></li>
                    <li><a className="hover:opacity-80 flex items-center cursor-pointer text-xs" href="/pl/kontakt">Pomoc i
                        kontakt</a></li>
                    <li><a className="hover:opacity-80 flex items-center cursor-pointer text-xs"
                           href="/pl/katalogi">Katalogi</a></li>
                    <li><a className="hover:opacity-80 flex items-center cursor-pointer text-xs" href="/pl/jak-rezerwowac">Jak
                        rezerwować?</a></li>
                    <li><a className="hover:opacity-80 flex items-center cursor-pointer text-xs"
                           href="https://admin.gofunlo.com/rejestracja">Dla firm</a></li>
                    <li><a className="hover:opacity-80 flex items-center cursor-pointer text-xs" href="/pl/blog">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
