import React from 'react';

function LocationModalContent({ onClose }: { onClose: () => void }) {
    return (
        <section className="w-[calc(100dvw-48px)] max-w-[328px] h-full max-h-[500] flex flex-col bg-light-yellow">

            {/* 스크롤 가능한 콘텐츠 영역 */}
            <div className="flex-1 overflow-y-auto px-16 py-24 no-scrollbar">
                <p className="text-center text-24 font-semibold mb-16">교통 안내</p>

                {/* 자동차 섹션 */}
                <div className="mt-16">
                    <SubTitle title="자동차" />
                    <Content>
                        <ul className="list-disc list-inside space-y-6 pl-4">
                            <li>
                                <span className="-ml-4">네비게이션 주소</span>
                                <p className="ml-14">부산 연제구 월드컵대로 344 아시아드주경기장 1층 (월드컵경기장)</p>
                            </li>
                            <li>
                                <span className="-ml-4">주차</span>
                                <p className="ml-14">웨딩홀 제1주차장, 제2주차장</p>
                            </li>
                        </ul>
                    </Content>
                </div>

                <Divider />

                {/* 버스 섹션 */}
                <div className="mt-16">
                    <SubTitle title="버스" />
                    <Content>
                        <ul className="list-disc list-inside space-y-6 pl-4">
                            <li>
                                <span className="-ml-4">사직 실내 수영장 하차 (부산진 ↔ 사직)</span><br />
                                <span className={'ml-14'}>54번, 57번, 83-1번, 131번 </span>
                            </li>
                            <li>
                                <span className="-ml-4">아시아드 주 경기장 하차 (초읍 ↔ 동래)</span><br />
                                <span className={'ml-14'}>54번, 57번, 83-1번 </span>
                            </li>
                            <li>
                                <span className="-ml-4">홈플러스 하차 (초읍 ↔ 동래)</span><br />
                                <span className={'ml-14'}>210번, 10번, 마을버스 부산진17번 </span>
                            </li>
                            <li>
                                <span className="-ml-4">마을버스</span><br />
                               <span className={'ml-14'}>마을버스 부산진 17번 </span>
                            </li>
                        </ul>
                    </Content>
                </div>

                <Divider />

                {/* 지하철 섹션 */}
                <div className="mt-16">
                    <SubTitle title="지하철" />
                    <Content>
                        <ul className="list-disc list-inside space-y-6 pl-4">
                            <li>
                                <span className="-ml-4">3호선 종합운동장역 9번 출구</span>
                            </li>
                        </ul>
                    </Content>
                </div>

                <Divider />

                <div className="mt-16">
                    <SubTitle title="셔틀버스" />
                    <Content>
                        <ul className="list-disc list-inside space-y-6 pl-4">
                            <li>
                                <span className="-ml-4">
                                    5분 간격으로 <span className="font-semibold text-wedding-red">셔틀버스</span> 운행 <br/>
                                    <span className={'ml-12'}>(종합운동장역 ↔ 아시아드웨딩홀)</span>
                                </span>
                            </li>
                        </ul>
                    </Content>
                </div>
            </div>

            <div onClick={onClose} className="w-full bg-light-yellow p-16 flex justify-center border-t sticky bottom-0">
                <button

                    className=" text-18 font-bold underline-offset-4 underline">
                    닫기
                </button>
            </div>
        </section>
    );
}

export default LocationModalContent;

/* 섹션 제목 (자동차, 버스, 지하철 등) */
const SubTitle = ({ title }: { title: string }) => {
    return (
        <div className="text-center text-18 font-semibold mb-8">
            {title}
        </div>
    );
};

/* 본문 내용 */
const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="text-14 leading-relaxed">
            {children}
        </div>
    );
};

/* 구분선 */
const Divider = () => {
    return <div className="bg-[#EBE6C7] w-full h-1 my-16" />;
};