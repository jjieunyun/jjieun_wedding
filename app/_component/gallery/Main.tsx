
import mainFrame from '@image/gallery/gallery_main.png';
import bottomBG from '@image/gallery/white_paper.png';
import line from '@image/gallery/bottom_line.png';
import Image from "next/image";
import titleBanner from "@image/title.png";
import green from "@image/gallery/pictures/object/green.png";


function Main({}) {


    return (
        <section className="bg-[url('/image/gallery/white_bg.png')] bg-repeat relative flex flex-col items-center pt-16 -mb-16">
            <div className="relative w-full overflow-hidden">
                <Image src={mainFrame} alt="frame" priority={true} width={470} className="z-20 w-470 relative" />
            </div>
            <Image src={green} alt="green" quality={90} className="absolute bottom-140 right-20 z-20" width={100} priority={true} />
            <Image src={bottomBG} alt="bottomBG" className="w-[calc(100%+16px)] h-full -ml-[2px]" priority={true} />
            <Image src={line} alt="line" className="absolute -bottom-11 z-10" priority={true} />
            <Image src={titleBanner} alt="titleBanner" className="absolute -bottom-110 z-20" priority={true} width={280} />
            <div className="z-30 absolute bottom-62 leading-[140%] text-center">
                2025년 4월 12일 (토요일)<br />
                오후 12시 20분 <br /><br />
                아시아드 시티 웨딩홀 (마리아주홀)
            </div>
        </section>
    );
}

export default Main;