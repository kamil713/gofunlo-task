import Link from "next/link";

export default function Home() {
  return (
      <main className="px-8 py-40 flex flex-col justify-center items-center gap-4">
        <h3 className="text-2xl font-medium">GoFunlo - zadanie rekrutacyjne</h3>
        <Link href="/dashboard/offers" className="font-semibold hover:underline">Kliknij aby przejść do zadania :)</Link>
      </main>
  );
}
