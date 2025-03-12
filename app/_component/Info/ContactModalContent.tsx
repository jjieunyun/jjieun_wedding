import React from 'react';
import {PhoneIcon} from "./PhoneIcon";
import {MailIcon} from "./MailIconProps";

export interface ContactInfo {
    role: string;   // 예: "신랑 아버지"
    name: string;   // 예: "홍길동"
    phone: string;  // 예: "010-1234-5678"
}


export const groomSideContacts: ContactInfo[] = [
    { role: "신랑", name: "신동헌", phone: "01033293161"},
    { role: "신랑 아버지", name: "신옥주", phone: "01038542261" },
    { role: "신랑 어머니", name: "박정희", phone: "01030692815" },
];

export const brideSideContacts: ContactInfo[] = [
    { role: "신부", name: "윤지은", phone: "01085456944"},
    { role: "신부 아버지", name: "윤영철", phone: "01038703192" },
    { role: "신부 어머니", name: "김명화", phone: "01068763305" },
];

interface ContactModalContentProps {
    onClose: () => void;
}

export default function ContactModalContent({ onClose }: ContactModalContentProps) {
    return (
        <section className="w-[calc(100dvw-48px)] max-w-[328px] h-full max-h-[500px] flex flex-col bg-light-yellow p-24">
            <div className="text-center text-24 font-semibold mb-16 ">- 연락처 -</div>

            {/* 스크롤 영역 */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
                <ul className="space-y-16">
                    {/* 신랑 측 헤더 */}
                    {groomSideContacts.map((contact, index) => (
                        <ContactItem key={index} contact={contact} />
                    ))}

                    <div className={''}>
                        <Divider className={''}/>
                    </div>

                    {/* 신부 측 헤더 */}
                    {brideSideContacts.map((contact, index) => (
                        <ContactItem key={index} contact={contact} />
                    ))}
                </ul>
            </div>

            {/* 닫기 버튼 */}
            <div className="w-full bg-light-yellow pt-24 flex justify-center">
                <button onClick={onClose}
                    className="text-18 font-bold underline-offset-4 underline">
                    닫기
                </button>
            </div>
        </section>
    );
}

const Divider = ({className=""}:{className :string}) => {
    return <div className={`bg-[#EBE6C7] w-full h-1 ${className}`} />;
};


function ContactItem({ contact }: { contact: ContactInfo }) {
    return (
        <li className="flex items-center justify-between">
            <div className={'flex text-center gap-x-16 items-center'}>
                <div className="w-100 text-14">{contact.role}</div>
                <div className={''}>{contact.name}</div>
            </div>
            <div className="flex space-x-12">
                <a href={`tel:${contact.phone}`} aria-label="전화하기" className={'w-30 h-30 bg-wedding-red flex justify-center items-center rounded-full'}>
                    <PhoneIcon className="w-16 h-16" fill={'#fff'} />
                </a>

                <a href={`sms:${contact.phone}`} aria-label="문자 보내기" className={'w-30 h-30 bg-wedding-red flex justify-center items-center rounded-full'}>
                  <MailIcon className="w-16 h-16" fill={'#fff'} />
                </a>
            </div>
        </li>
    );
}