'use client';

import React, {useState} from 'react';
import art from '@image/art.png';
import Image, {StaticImageData} from 'next/image';
import CustomCollapse from '../CustomCollapse';
import IcHeartEmpty from '@image/ic-heart-empty.png';
import IcHeart from '@image/ic-heart.png';

const Account = () => {
    // 각각의 아코디언 상태를 독립적으로 관리하는 상태 객체
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        groom: false,
        bride: false,
    });

    // 특정 섹션의 열림/닫힘을 토글
    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <section className={'w-full h-full px-24 pt-80 bg-[#FAFAFA]'}>
            <p className="text-32 text-center font-semibold leading-[120%] mb-16">
                마음 전하실 곳
            </p>

            <div className="flex justify-center mb-16">
                <Image src={art} alt="art" width={270} height={270}/>
            </div>

            <div className="text-center leading-[140%] mb-40 font-hakgyoansim">
                참석이 어려워
                <br/>
                직접 축하를 전하지 못하는 분들을 위해
                <br/>
                계좌번호를 기재하였습니다.
                <br/>
                넓은 마음으로 양해 부탁드립니다.
                <br/>
                전해주시는 진심은 소중하게 간직하여
                <br/>
                좋은 부부의 모습으로 보답하겠습니다.
            </div>

            <div className="flex flex-col gap-8">
                <div>
                    <AccordionSection
                        title="신랑측"
                        isOpen={openSections['groom']}
                        onToggle={() => toggleSection('groom')}
                        openIcon={IcHeart}
                        closeIcon={IcHeartEmpty}
                    >
                        <AccountInfo name={<NameTag pre={'아버지'} name={'신옥주'}/>} bank="부산은행" account="163-12-005092-7" hasBorder={true}/>
                        <AccountInfo name={<NameTag pre={'어머니'} name={'박정희'}/>}bank="하나은행" account="308-910296-79207" hasBorder={false}/>
                    </AccordionSection>
                </div>


                <div>
                    <AccordionSection
                        title="신부측"
                        isOpen={openSections['bride']}
                        onToggle={() => toggleSection('bride')}
                        openIcon={IcHeart}
                        closeIcon={IcHeartEmpty}
                    >
                        <AccountInfo name={<NameTag pre={'아버지'} name={'윤영철'}/>} bank="새마을금고" account="1318-09-005947-5" hasBorder={true}/>
                        <AccountInfo name={<NameTag pre={'아버지'} name={'김명화'}/>} bank="신한은행" account="100-306-713534" hasBorder={false}/>
                    </AccordionSection>
                </div>
            </div>
        </section>
    );
};

export default Account;

const NameTag = ({pre, name}:{
    pre: string;
    name: string;
})=>{
    return (
        <div className={'flex items-center gap-x-12'}>
            <div className={'w-72 text-left'}>{pre} </div>
            <div className={'font-semibold text-16'}>{name}</div>
        </div>
    )
}

const AccountInfo = ({name, bank, account, hasBorder}: { name: string | React.ReactNode; bank: string; account: string, hasBorder: boolean }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(bank+account);
    };

    return (
        <div className={`flex justify-between items-center py-12 ${hasBorder && 'border-b'} `}>
            <div>
                <div className="text-14 mb-4">{name}</div>
                <div className={'flex  items-center gap-x-12'}>
                   <div className={'w-72 text-left'}>{bank}</div>
                    <div>{account}</div>
                </div>

            </div>
            <button onClick={handleCopy} className="text-12">
                계좌 복사
            </button>
        </div>
    );
};


interface AccordionSectionProps {
    title: string | React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    openIcon: StaticImageData;
    closeIcon: StaticImageData;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
                                                               title,
                                                               isOpen,
                                                               onToggle,
                                                               children,
                                                               openIcon,
                                                               closeIcon,
                                                           }) => {
    return (
        <>
            <div
                className="border-1 border-[#EBE6C7] h-52 px-10 flex justify-between items-center cursor-pointer border-b "
                onClick={onToggle}
            >
                <div className="">{title}</div>
                <Image
                    src={isOpen ? openIcon : closeIcon}
                    alt="heart"
                    width={24}
                    height={24}
                />
            </div>

            <CustomCollapse isOpened={isOpen}>
                <div className={`bg-light-yellow px-16 py-12 ${isOpen ? 'mb-8' : ''}`}>
                    {children}
                </div>
            </CustomCollapse>
        </>
    );
};