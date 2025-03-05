import React from 'react';

function ContactModalContent({onClose}:{
    onClose: () => void
}) {
    return (
        <section className="w-[calc(100dvw-48px)] max-w-[328px] h-full max-h-[500] flex flex-col bg-light-yellow p-24">
            <p className="text-center text-24 font-semibold mb-16">연락처</p>
            <div className="flex-1 overflow-y-auto no-scrollbar">
                <ul className="list-disc list-inside space-y-6 pl-4">
                    <li>
                        <span className="-ml-4">신옥주</span>
                        <p className="ml-14">010-1234-5678</p>
                    </li>
                    <li>
                        <span className="-ml-4">박정희</span>
                        <p className="ml-14">010-1234-5678</p>
                    </li>
                    <li>
                        <span className="-ml-4">윤영철</span>
                        <p className="ml-14">010-1234-5678</p>
                    </li>
                    <li>
                        <span className="-ml-4">김명화</span>
                        <p className="ml-14">010-1234-5678</p>
                    </li>
                </ul>
            </div>
            <button onClick={onClose} className="w-full h-42 bg-wedding-red text-white rounded-8 text-14 mt-24">닫기</button>
        </section>
    );
}

export default ContactModalContent ;