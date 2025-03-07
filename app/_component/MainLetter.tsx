import React, {useState, useEffect} from 'react';
import letter1 from '@image/letter-1.png';
import letter2 from '@image/letter-2.png';
import letter3 from '@image/letter-3.png';
import arrow from '@image/main_arrow.png';
import Image from "next/image";
import {useActivePage} from "../_context/ActivePageContext";

const MainLetter: React.FC = () => {
    const [step, setStep] = useState<number>(0);
    const {setActivePage} = useActivePage();

    useEffect(() => {
        // 2초 후 setInterval 실행
        const delayTimer = setTimeout(() => {
            const interval = setInterval(() => {
                setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
            }, 1000);

            return () => clearInterval(interval);
        }, 1500);

        return () => clearTimeout(delayTimer);
    }, []);

    const renderImage = () => {
        switch (step) {
            case 0:
                return <Image src={letter1} alt="letter1" className="w-full h-auto" width={320} height={320}/>;
            case 1:
                return <Image src={letter2} alt="letter2" className="w-full h-auto"/>;
            case 2:
                return <Image src={letter3} alt="letter3" className="w-full h-auto"/>;
            case 3:
                return <Image src={letter3} alt="letter4" className="w-full h-auto" onClick={onClickStart}/>

            default:
                return null;
        }
    };

    const onClickStart = () => {
        setActivePage('info');
    }

    return (
        <section className={'w-full h-[100dvh] bg-[#0E0E13] px-28 flex justify-center items-center flex-col'}>

            <div className={'w-full h-250 flex items-center justify-center'}>
                {
                    step === 0 && <div className={'flex flex-col items-center'}>
                      <div className={'text-[#98CCE6] text-70 font-rawrote text-center mb-40 animate-bounce'}>
                        You’ve got<br/>the message!
                      </div>
                    </div>
                }
                {
                    step === 3 && (
                        <div className={'flex flex-col items-center'}>
                            <div className={'text-[#98CCE6] text-70 font-rawrote text-center mb-40'}>
                                touch it
                            </div>
                            <Image src={arrow} alt={'arrow '} width={40} height={40} className={`mb-24 animate-bounce`}/>
                        </div>
                    )
                }
            </div>
            <div className={'px-36'}>
                {renderImage()}
            </div>

        </section>
    );
};

export default MainLetter;