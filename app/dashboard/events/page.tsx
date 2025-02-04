import { Suspense } from 'react';
import {EventsSkeleton} from "@/app/ui/skeletons";
import Events from "@/app/ui/dashboard/events";

export default async function Page() {
    return (
        <>
            <Suspense fallback={<EventsSkeleton />}>
                <Events />
            </Suspense>
        </>
    );
}