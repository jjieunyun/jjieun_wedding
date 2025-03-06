import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_context/ThemeContext";
import LayoutClient from "./_component/LayoutClient";
import localFont from "next/font/local";
import {ActivePageProvider} from "./_context/ActivePageContext";

export const metadata: Metadata = {
    title: "동헌💗지은, 저희 결혼합니다!",
    description: "4월12일(토) PM12:20 / 아시아드시티웨딩홀 마리아주홀",
    openGraph: {
        title: "동헌💗지은, 저희 결혼합니다!",  // OG 미리보기 제목
        description: "4월12일(토) PM12:20 / 아시아드시티웨딩홀 마리아주홀", // 설명
        images: [
            {
                url: "https://res.cloudinary.com/dlizycik0/image/upload/og_image.jpg", // 이미지 URL
                width: 800,  // 권장 크기
                height: 400,
            }
        ]
    }
};

const paperlogy = localFont({
    src: [
        { path: "./fonts/Paperlogy-1Thin.ttf", weight: "100", style: "normal" },
        { path: "./fonts/Paperlogy-2ExtraLight.ttf", weight: "200", style: "normal" },
        { path: "./fonts/Paperlogy-3Light.ttf", weight: "300", style: "normal" },
        { path: "./fonts/Paperlogy-4Regular.ttf", weight: "400", style: "normal" },
        { path: "./fonts/Paperlogy-5Medium.ttf", weight: "500", style: "normal" },
        { path: "./fonts/Paperlogy-6SemiBold.ttf", weight: "600", style: "normal" },
        { path: "./fonts/Paperlogy-7Bold.ttf", weight: "700", style: "normal" },
        { path: "./fonts/Paperlogy-8ExtraBold.ttf", weight: "800", style: "normal" },
        { path: "./fonts/Paperlogy-9Black.ttf", weight: "900", style: "normal" },
    ],
    variable: "--font-paperlogy",
});

const rawrote = localFont({
    src: "./fonts/Rawrote.ttf",
    variable: "--font-rawrote",
});

const hakgyoansim = localFont({
    src: [
        { path: "./fonts/Hakgyoansim_Badasseugi_TTF_B.ttf", weight: "700", style: "normal" },
        { path: "./fonts/Hakgyoansim_Badasseugi_TTF_L.ttf", weight: "300", style: "normal" },
    ],
    variable: "--font-hakgyoansim",
});


export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${paperlogy.className} ${rawrote.variable} ${hakgyoansim.variable} `}>
        <ActivePageProvider>
            <ThemeProvider>
                <LayoutClient>{children}</LayoutClient>
            </ThemeProvider>
        </ActivePageProvider>
        </body>
        </html>
    );
}
