import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";
import TitleTwoRow from "./components/TitleTwoRow";
import AcademyAsset2 from "./components/asset/AcademyAseet2";
import AcademyAsset from "./components/asset/AcademyAsset";
import AcademyAsset3 from "./components/asset/AcademyAsset3";
import AcademyAsset4 from "./components/asset/AcademyAsset4";

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
                    <div className="grid grid-cols-5 gap-16">
                        {/* 공지사항 */}
                        <div className="col-span-3 space-y-8">
                            {/* 타이틀 */}
                            <TitleTwoRow main="공지사항" sub="notice" />
                            {/* 게시판 */}
                            <div className="w-full flex flex-col">
                                <div className="border-2 border-neutral-900 w-full flex items-center">
                                    <div className="bg-neutral-900 text-center w-20 aspect-square flex justify-center items-center text-white">
                                        2023
                                        <br />
                                        05-15
                                    </div>
                                    <div className="px-4">
                                        대구 오페라하우스 개관 20주년 이벤트
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {Array(5)
                                    .fill("")
                                    .map((_, i) => (
                                        <li
                                            key={i}
                                            className=" w-full flex justify-between px-1 py-3 cursor-pointer hover:bg-neutral-50"
                                        >
                                            <span>
                                                대구오페라하우스는 문화비
                                                소득공제가 가능합니다.
                                            </span>
                                            <span>2023-06-08</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        {/* 아카데미 */}
                        <div className="col-span-2 flrx flex-col space-y-8">
                            <TitleTwoRow main="아카데미" sub="doh academy" />
                            <p className="w-1/2">
                                전문적이고 차별화 된 대구오페라하우스의 아카데미
                                교육프로그램을 만나보세요
                            </p>
                            {/* 아이콘 4개 이미지 */}
                            <div className="grid grid-cols-2 gap-6">
                                {/* 1번째 아이콘 */}
                                <div className="flex items-center space-x-4">
                                    {/* 아이콘 */}
                                    <div>
                                        <AcademyAsset />
                                    </div>
                                    {/* 글 내용 */}
                                    <div>
                                        <p>아카데미 안내</p>
                                        <p>Academy</p>
                                    </div>
                                </div>
                                {/* 2번째 아이콘 */}
                                <div className="flex items-center space-x-4">
                                    {/* 아이콘 */}
                                    <div>
                                        <AcademyAsset4 />
                                    </div>
                                    {/* 글 내용 */}
                                    <div>
                                        <p>아카데미 안내</p>
                                        <p>Academy</p>
                                    </div>
                                </div>
                                {/* 3번째 아이콘 */}
                                <div className="flex items-center space-x-4">
                                    {/* 아이콘 */}
                                    <div>
                                        <AcademyAsset2 />
                                    </div>
                                    {/* 글 내용 */}
                                    <div>
                                        <p>아카데미 안내</p>
                                        <p>Academy</p>
                                    </div>
                                </div>
                                {/* 4번째 아이콘 */}
                                <div className="flex items-center space-x-4">
                                    {/* 아이콘 */}
                                    <div>
                                        <AcademyAsset3 />
                                    </div>
                                    {/* 글 내용 */}
                                    <div>
                                        <p>아카데미 안내</p>
                                        <p>Academy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
