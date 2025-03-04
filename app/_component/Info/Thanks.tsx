import React, { useEffect } from "react";
import thanksTo from "@image/thanksTo.jpeg";
import Image from "next/image";
import Button from "./Button";
import icMessage from "@image/ic-message.svg";
import icShare from "@image/ic-share.svg";
import { copyToClipboard } from "../../_utils/copyToClipboard";

function Thanks({ }) {
    useEffect(() => {
        if (window.Kakao) {
            const { Kakao } = window;
            if (!Kakao.isInitialized()) {
                Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
                console.log("✅ Kakao SDK 초기화 완료");
            }
        }
    }, []);

    const shareUrl = "https://www.jieun-donghun-250412.today/";
    const defaultDescription = "저희의 결혼을 축하해 주셔서 감사합니다! 💕";
    const imageUrl = "https://res.cloudinary.com/dlizycik0/image/upload/jjieun_wedding_poster.jpg";

    const handleKakaoShare = () => {
        if (typeof window !== "undefined") {
            const { Kakao } = window;
            if (Kakao && Kakao.Share) {
                Kakao.Share.sendDefault({
                    objectType: "feed",
                    content: {
                        title: "동헌💗지은, 저희 결혼합니다.",
                        description: "4월12일 토요일 낮 12시20분\n아시아드시티웨딩홀 마리아주홀",
                        imageUrl: imageUrl,
                        link: {
                            mobileWebUrl: shareUrl,
                            webUrl: shareUrl,
                        },
                    },
                    buttons: [
                        {
                            title: "모바일 청첩장 보기",
                            link: {
                                mobileWebUrl: shareUrl,
                                webUrl: shareUrl,
                            },
                        },
                    ],
                });
            } else {
                console.error("Kakao SDK가 로드되지 않았습니다.");
            }
        }
    };

    const handleCopyUrl = async () => {
        console.log("https://www.jieun-donghun-250412.today/");
        await copyToClipboard("https://www.jieun-donghun-250412.today/");
    };

    return (
        <section className="w-full h-full relative">
            <Image src={thanksTo} alt="thanksTo" />
            <div className="w-full text-center leading-[140%] text-light-yellow absolute top-57">
                저희의 새로운 시작을
                <br />
                축하해주시는 모든 분들께
                <br />
                진심으로 감사드립니다.
                <br />
                행복하게 잘 살겠습니다.
            </div>
            <article className="pt-40 pb-24 w-full h-full bg-[#0E0E13] px-24 flex gap-x-16">
                {/* 카카오 공유하기 버튼 */}
                <Button onClick={handleKakaoShare}>
                    <div className="flex items-center gap-x-8">
                        <Image src={icMessage} alt="icMessage" />
                        <span className="text-16">카카오 공유하기</span>
                    </div>
                </Button>

                {/* 링크 복사하기 버튼 */}
                <Button onClick={handleCopyUrl}>
                    <div className="flex items-center gap-x-8">
                        <Image src={icShare} alt="icShare" />
                        <span className="text-16">링크 복사하기</span>
                    </div>
                </Button>
            </article>
        </section>
    );
}

export default Thanks;