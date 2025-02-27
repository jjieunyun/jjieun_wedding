import React from 'react';

function LocationModalContent({ onClose }: { onClose: () => void }) {
    return (
        <section className={'w-[calc(100dvw-48px)] max-w-[328px] h-full max-h-400 overflow-y-auto no-scrollbar'}>
            {/* 전체 컨테이너 */}
            <div className={'w-full h-full bg-light-yellow px-16 py-24'}>

                {/* 자동차 섹션 */}
                <div className="mt-12">
                    <SubTitle title="자동차" />
                    <Content>
                        부산 연제구 월드컵대로 344 아시아드주경기장 1층 (월드컵경기장)
                        <br />
                        <span className="font-semibold">네비게이션</span>에 위 주소를 입력하시면 됩니다.
                        <br />
                        주차장: 제1주차장, 제2주차장 이용 가능
                    </Content>
                </div>

                {/* 버스 섹션 */}
                <div className="mt-16">
                    <SubTitle title="버스" />
                    <Content>
                        <div>
                            <span className="font-semibold">간선(Blue):</span> 160, 260, 600
                        </div>
                        <div>
                            <span className="font-semibold">지선(Green):</span> 7013A, 7013B, 7611
                        </div>
                        <div>
                            <span className="font-semibold">마을버스:</span> 마포01, 마포02, 마포10
                        </div>
                        <div>
                            <span className="font-semibold">일반버스:</span> 1002
                        </div>
                        <div>
                            <span className="font-semibold">공항버스:</span> 6015, 6021
                        </div>
                    </Content>
                </div>

                {/* 지하철 섹션 */}
                <div className="mt-16">
                    <SubTitle title="지하철" />
                    <Content>
                        <div className="mb-8">
                            <span className="font-semibold">3호선 종합운동장역 9번 출구</span>
                            <br />
                            5분 간격으로 셔틀버스 운행 (종합운동장역 ⇨ 아시아드웨딩홀)
                        </div>
                        <div>
                            <span className="font-semibold">다른 역 예시</span>
                            <br />
                            공덕역 10번 출구 (경의중앙선, 공항철도) - 도보 30초
                            <br />
                            공덕역 9번 출구 (경의중앙선, 공항철도) - 도보 1분
                        </div>
                    </Content>
                </div>

                {/* 닫기 버튼 */}
                <div className="w-full flex justify-center mt-24">
                    <button
                        onClick={onClose}
                        className="bg-white text-16 font-semibold px-12 py-8 rounded shadow"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </section>
    );
}

export default LocationModalContent;

/* 섹션 제목 (자동차, 버스, 지하철 등) */
const SubTitle = ({ title }: { title: string }) => {
    return (
        <div className="text-16 font-semibold mb-4">
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