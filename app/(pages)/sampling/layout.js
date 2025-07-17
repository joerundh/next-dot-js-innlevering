import getQueryClient from "@/app/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Layout({ children }) {
    const queryClient = getQueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<>
                    <h2 className={"font-bold text-center text-lg"}>Loading</h2>
                    <p>Please wait...</p>
                </>}>
                <div className={"flex flex-col justify-start gap-3"}>
                    {children}
                </div>
            </Suspense>
        </HydrationBoundary>
    );
}