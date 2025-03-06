import React, {useState, useEffect} from 'react';
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import InfoMain from '@image/info_main.png';
import IcRibbon from '@image/ic-ribbon.svg';
import usePortal from "../../_hook/usePortal";
import Portal from "../Portal";
import ContactModalContent from "./ContactModalContent";

function Invitation() {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 400;
            setShowMessage(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <article className="w-full h-[2000px] bg-[#161618]">
            <div className="sticky top-54 ">
                <div className={'h-[calc(100vh-104px)] relative'}>
                    <AnimatePresence mode="wait">
                        {showMessage ? <Message key="message"/> : <Picture key="picture"/>}
                    </AnimatePresence>
                </div>
            </div>
        </article>
    );
}

export default Invitation;

const Message = ({className = ''}) => {
    const {
        isPortalOpen,
        handleOpenPortal,
        handleClosePortal,
    } = usePortal()

    return (
        <motion.div
            initial={{rotateY: 90, opacity: 0}}
            animate={{rotateY: 0, opacity: 1}}
            exit={{rotateY: -90, opacity: 0}}
            transition={{duration: 0.25}}
            className={`w-full  h-full bg-[#F5F1DC] flex items-center ${className}`}
        >
            <div className={'w-470  h-563 flex flex-col items-center bg-[#F5F1DC] justify-center font-paperlogy'}>
                <div className={'mb-42 flex flex-col items-center'}>
                    <Image src={IcRibbon} alt={'IcRibbon'} className={''}/>
                    <p className={'text-center'}> 소중한 분들을 초대합니다.</p>
                </div>

                <div className={'text-center text-19 font-light mb-42 font-hakgyoansim'}>
                    <div className={'leading-[160%] mb-24'}>
                        5년이라는 시간 속에서 <br/>
                        서로에게 가장 소중한 사람이 되었습니다.<br/>
                        이제 하나의 길 위에서<br/>
                        평생을 약속하려 합니다.
                    </div>
                    <div className={'leading-[160%] '}>
                        2025년 4월 12일, 귀한 걸음으로<br/>
                        축복해 주시면 감사하겠습니다.
                    </div>
                </div>
                <div className={'leading-[160%] mb-24'}>
                    <div className={'text-14'}><span className={'font-semibold text-16'}>신옥주 · 박정희</span> 의 장남 <span
                        className={'font-semibold text-16'}>&nbsp;&nbsp;동헌</span></div>
                    <div className={'text-14'}><span className={'font-semibold text-16'}>윤영철 · 김명화</span> 의 장녀 <span
                        className={'font-semibold text-16'}>&nbsp;&nbsp;지은</span></div>

                </div>
                <button onClick={handleOpenPortal}
                    className={'w-fit h-fit bg-wedding-red text-white px-12 py-8 rounded-8 text-14'}>
                    혼주에게 연락하기
                </button>
            </div>
            <Portal isOpen={isPortalOpen} onClose={handleClosePortal}>
                <ContactModalContent onClose={handleClosePortal}/>
            </Portal>
        </motion.div>
    )
}

const Picture = ({className = ''}) => {
    return (
        <motion.div
            initial={{rotateY: -90, opacity: 0}}
            animate={{rotateY: 0, opacity: 1}}
            exit={{rotateY: 90, opacity: 0}}
            transition={{duration: 0.25}}
            className={`w-full h-full bg-[#161618] flex items-center ${className}`}
        >
            <Image src={InfoMain} alt={'InfoMain'} className={' h-563 object-contain'}/>
        </motion.div>
    );
};
