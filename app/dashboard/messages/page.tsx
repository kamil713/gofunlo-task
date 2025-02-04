import { Suspense } from 'react';
import MockPage from "@/app/ui/mocks/mock-page";
import {LoadingIndicator} from "@/app/ui/skeletons";

export default async function Page() {
    return (
        <>
            <Suspense fallback={<LoadingIndicator />}>
                <MockPage title="Wiadomości" />
            </Suspense>
        </>
    );
}