import React from 'react';
import {copyToClipboard} from "../../_utils/copyToClipboard";
import Map from "./Map";
import IconNaver from '@image/IconNaver.png';
import IconKakao from '@image/IconKakao.png';
import IconTamp from '@image/IconTamp.png';
import Image, {StaticImageData} from 'next/image';
import usePortal from "../../_hook/usePortal";
import Portal from "../Portal";
import LocationModalContent from "./LocationModalContent";
import Button from "./Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ADDRESS = "부산 연제구 거제동 1299";

const LinkData = [
    {
        src: IconTamp,
        label: '티맵',
        onClick: () => {
            const tmapUrl = `https://tmap.life/df631bc9`;
            window.open(tmapUrl, '_blank');
        }
    },
    {
        src: IconNaver,
        label: '네이버 지도',
        onClick: () => {
            const naverUrl = `https://naver.me/FcmAupqW`;
            window.open(naverUrl, '_blank');
        }
    },
    {
        src: IconKakao,
        label: '카카오 맵',
        onClick: () => {
            const kakaoUrl = `https://map.kakao.com/?itemId=14723705`;
            window.open(kakaoUrl, '_blank');
        }
    },
];



function Location() {
    const {isPortalOpen, handleOpenPortal, handleClosePortal} = usePortal();

    return (
        <section className="w-full h-full bg-[#FAFAFA] pt-80">
            <div className="mb-16 px-24 cursor-pointer">
                <p className="text-32 text-center font-semibold leading-[120%] mb-16">
                    아시아드시티<br/>
                    마리아주 홀
                </p>
                <div
                    onClick={() => {
                        copyToClipboard(ADDRESS);
                        toast.success("클립보드에 복사되었습니다.", {
                            position: "bottom-center",
                            autoClose: 3000,
                            style: {
                                background: '#F4F1DE',
                                color: '#161618',
                                fontSize: '14px',
                                borderRadius: '24px',
                                padding: '16px',
                                width: '250px',
                                marginBottom: '32px'
                            }
                        });
                    }}
                    className="h-42 flex items-center rounded-8 border-1 px-24 justify-between"
                >
                    <p>{ADDRESS}</p>
                    <p className="text-[#C4282D] text-14 font-semibold">복사</p>
                </div>
            </div>
            <Map className="mb-47 naver-map"/>
            <div className="flex justify-between px-48 mb-24">
                {LinkData.map(item => (
                    <LinkBox key={item.label} icon={item.src} label={item.label} onClick={item.onClick}/>
                ))}
            </div>
            <div className={'w-full h-full px-24'}>
                <Button onClick={handleOpenPortal}>교통 안내</Button>
            </div>
            <Portal isOpen={isPortalOpen} onClose={handleClosePortal}>
                <LocationModalContent onClose={handleClosePortal}/>
            </Portal>
                <ToastContainer
                    position="bottom-center"
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    closeButton={false}
                />
        </section>
    );
}

export default Location;

const LinkBox = ({icon, label, onClick}: {
    icon: StaticImageData;
    label: string;
    onClick: () => void;
}) => {
    return (
        <div onClick={onClick} className="flex flex-col items-center cursor-pointer">
            <div className="w-42 h-42 rounded-full overflow-hidden flex justify-center items-center mb-8">
                <Image src={icon} alt={label} width={42} height={42}/>
            </div>
            <p>{label}</p>
        </div>
    );
};