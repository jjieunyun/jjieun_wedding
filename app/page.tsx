"use client";

import { useState } from "react";
import InfoMain from "./_component/Info/InfoMain";

export default function Home() {
    const [pageType, setPageType] = useState<'gallery'|'info'>('info');

    return (
        <main className={'w-full h-full min-h-[calc(100dvh-54px)]  flex justify-center relative' }>
            <div className={'h-full w-full max-w-470  relative  '}>
                <InfoMain/>
            </div>
        </main>
    );
}