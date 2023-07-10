import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";
import TitleTwoRow from "./components/TitleTwoRow";

export default function Page() {
    return (
        <Layout>
            <div className="w-full h-screen-minus-header overflow-hidden">
                {/* 메인캐러셀 이미지 */}
                <CarouselMain />
            </div>
            {/* 그리드 3/5 2/5 구분 */}
            <div className="py-16 w-full">
                <div className="w-full px-4">
                    <div className="grid grid-cols-5">
                        {/* 공지사항 */}
                        <div className="col-span-3 space-y-8">
                            {/* 타이틀 */}
                            <TitleTwoRow main="공지사항" sub="notice" />
                            {/* 게시판 */}
                            <div className="w-full flex flex-col">
                                <div className="border-2 border-neutral-900 w-full flex items-center">
                                    <div className="bg-neutral-900 text-center w-20 ">
                                        2023 05-15
                                    </div>
                                    <div>
                                        대구 오페라하우스 개관 20주년 이벤트
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 아카데미 */}
                        <div className="col-span-2"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
