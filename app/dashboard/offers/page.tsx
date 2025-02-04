import { Suspense } from 'react';
import {DedicatedOffersSkeleton} from "@/app/ui/skeletons";
import DedicatedOffers from "@/app/ui/dashboard/dedicated-offers";

export default async function Page() {
    return (
        <>
            <Suspense fallback={<DedicatedOffersSkeleton />}>
                <DedicatedOffers />
            </Suspense>
        </>
    );
}