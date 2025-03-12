import React from 'react';
import Pictures from "./Pictures";
import Main from "./Main";

function GalleryMain({}) {
    return (
        <section className="w-full h-[calc(100dvh-50px)] overflow-y-auto overflow-x-hidden no-scrollbar
          relative">
            <Main/>
            <Pictures/>
        </section>
    );
}

export default GalleryMain;