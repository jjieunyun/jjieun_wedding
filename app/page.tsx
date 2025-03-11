import Image from "next/image";
import temp from '@image/IMG_4133.jpg';

export default function Home() {
    return (
        <main className="w-full h-full min-h-screen  flex items-center justify-center  bg-black ">
            <section className={'w-full h-full min-h-screen max-w-[740px] flex items-center bg-black'}>
                <Image src={temp} alt={'temp'} className={'w-full h-screen object-contain'}/>
                
            </section>
        </main>
    );
}