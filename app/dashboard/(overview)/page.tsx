import { Suspense } from 'react';
import {LoadingIndicator} from "@/app/ui/skeletons";
import MockPage from "@/app/ui/mocks/mock-page";

export default async function Page() {
    return (
        <>
            <Suspense fallback={<LoadingIndicator />}>
                <MockPage title="Moje dane" />
            </Suspense>
        </>
    );
}