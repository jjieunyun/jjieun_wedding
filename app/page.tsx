"use client";

import InfoMain from "./_component/Info/InfoMain";
import MainLetter from "./_component/MainLetter";
import { useActivePage } from "./_context/ActivePageContext";

export default function Home() {
    const {activePage} = useActivePage();

    return (
        <main className={`w-full ${activePage === 'opening' ? 'h-screen' :'h-full min-h-[calc(100dvh-54px)]'}  flex justify-center relative` }>
            <div className={'h-full w-full max-w-470  relative  '}>
                {
                    activePage === 'opening' && <MainLetter/>
                }
                {
                    activePage === 'info' && <InfoMain/>
                }
                {
                    activePage === 'gallery' && <div>Gallery</div>
                }
            </div>
        </main>
    );
}