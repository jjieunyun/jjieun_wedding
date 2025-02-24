"use client";

import Image from "next/image";
import temp from '@image/IMG_4133.jpg';
import { useState } from "react";
import InfoMain from "./_component/Info/InfoMain";

export default function Home() {
    const [pageType, setPageType] = useState<'gallery'|'info'>('info');

    return (
        <main>
            <InfoMain/>
        </main>
    );
}