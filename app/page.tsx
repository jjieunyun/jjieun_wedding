"use client";

import { useState } from "react";
import InfoMain from "./_component/Info/InfoMain";

export default function Home() {
    const [pageType, setPageType] = useState<'gallery'|'info'>('info');

    return (
        <main className={'w-full h-full min-h-[calc(100dvh-54px)] bg-background-gray-light flex justify-center overflow-y-scroll no-scrollbar relative' }>
            <div className={'h-full w-full max-w-470  bg-white relative '}>
                <InfoMain/>
            </div>
        </main>
    );
}