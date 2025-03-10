import React from 'react';
import Intro from "./Intro";
import Pictures from "./Pictures";

function GalleryMain({}) {
    return (
        <section className="w-full h-[calc(100dvh-50px)] overflow-y-auto overflow-x-hidden no-scrollbar
          relative">
            <Intro/>
            <Pictures/>
        </section>
    );
}

export default GalleryMain;