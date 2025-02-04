import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="pb-14 md:pb-20 flex flex-col md:flex-row md:overflow-hidden">
            <div className="hidden md:block w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </main>
    );
}