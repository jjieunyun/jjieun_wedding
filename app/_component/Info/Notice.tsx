import React,{useState} from 'react';
import bird from "@image/bird.png";
import Image from "next/image";

const tabs = [
    {
        id: 1,
        label: '셔틀버스',
        content: <div>
            <span className="bg-light-yellow">종합운동장역 9번출구</span>에서<br/>
            셔틀버스를 운행합니다.<br/>
            (5~7분 간격)<br/>
        </div>,
    },
    {
        id: 2,
        label: '주차장',
        content: <div>
            웨딩홀 제1주차장, 제2주차장
        </div>,
    },
    {
        id: 3,
        label: '화환',
        content: <div>
            화환반입이 불가하오니<br/> 너른 마음으로 양해 부탁드립니다.
        </div>
    },
    {
        id: 4,
        label: '포토부스',
        content: <div>
            식장 내 포토부스가 준비되어 있습니다.<br/>
            아름다운 사진과<br/> 축하의 메시지를 남겨주시면,<br/>
            소중히 간직하며 기억하겠습니다.💗
        </div>
    },
]



function Notice({}) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={'w-full h-full pt-80 pb-40 bg-[#FAFAFA]'}>
            <p className="text-32 text-center font-semibold leading-[120%] mb-16 ]">
                안내 사항
            </p>
            <div className={'flex justify-center mb-40'}>
                <Image src={bird} alt={'bird'} width={160} height={160}/>
            </div>

            <div className={'w-full flex justify-center px-24'}>
                <div className="w-full mx-auto border-1 border-wedding-red rounded-8 overflow-hidden">
                    {/* 탭 버튼 영역 */}
                    <div className="flex justify-between border-b-1 border-wedding-red">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full py-12
                                ${
                                    activeTab === index
                                        ? 'bg-wedding-red text-white'
                                        : 'text-gray-500 '
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* 탭 내용 영역 */}
                    <div className="flex justify-center items-center w-full h-200 leading-[160%] px-48 text-center">
                        {tabs[activeTab].content}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Notice;

