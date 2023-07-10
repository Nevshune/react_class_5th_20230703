import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";
import MultiCarousel from "./components/MultiCarousel";
import TitleTwoRow from "./components/TitleTwoRow";
import AcademyAsset2 from "./components/asset/AcademyAseet2";
import AcademyAsset from "./components/asset/AcademyAsset";
import AcademyAsset3 from "./components/asset/AcademyAsset3";
import AcademyAsset4 from "./components/asset/AcademyAsset4";
import KakaotalkAsset from "./components/asset/KakaotalkAsset";

export default function Page() {
    return (
        <Layout>
            <div className="w-full h-screen-minus-header overflow-hidden">
                {/* 메인캐러셀 이미지 */}
                <CarouselMain />
            </div>
            {/* 1번째 그리드 3/5 2/5 구분 */}
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
            {/* 2번째 그리드 3/5 2/5 구분 */}
            <div className="py-16 w-full">
                <div className="w-full px-4">
                    <div className="grid grid-cols-5 gap-16">
                        {/* 소셜네트워크 */}
                        <div className="col-span-3">
                            <TitleTwoRow
                                main="소셜네트워크"
                                sub="social network"
                            />
                            <div className="w-full grid grid-cols-2 gap-4">
                                {/* 1번째 자식 */}
                                <div className="w-full cursor-pointer aspect-video relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1070&q=80"
                                        alt="social image1"
                                    />
                                    <p className="font-semibold py-3 px-1">
                                        오페라테 Operatte
                                    </p>
                                    {/* 호버했을 때 음영처리용 빈박스 */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-[hsl(0,0%,98.4%,0.2)] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100"></div>
                                    {/* 오른쪽 위 아이콘 */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/70 flex justify-center items-center">
                                        <KakaotalkAsset />
                                    </div>
                                </div>
                                {/* 2번째 자식 */}
                                <div className="w-full cursor-pointer aspect-video relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80"
                                        alt="social image1"
                                    />
                                    <p className="font-semibold py-3 px-1">
                                        카페라테 caffeelatte
                                    </p>
                                    {/* 호버했을 때 음영처리용 빈박스 */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-[hsl(0,0%,98.4%,0.2)] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100"></div>
                                    {/* 오른쪽 위 아이콘 */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/70 flex justify-center items-center">
                                        <KakaotalkAsset />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 알림존 */}
                        <div className="col-span-2 flex flex-col space-y-8">
                            <TitleTwoRow main="알림존" sub="doh banner" />
                            <MultiCarousel>
                                {/* 첫번째 이미지 */}
                                <div className="w-52 h-60 bg-gray-400">
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1688448543484-ecd531cba9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="alimzone1"
                                    />
                                </div>
                                {/* 두번쨰 이미지 */}
                                <div className="w-52 h-60 bg-gray-400">
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1669940812749-0a0fa4b92ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="alimzone1"
                                    />
                                </div>
                                {/* 세번쨰 이미지 */}
                                <div className="w-52 h-60 bg-gray-400">
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src="https://plus.unsplash.com/premium_photo-1675756583871-6be3905c4ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="alimzone1"
                                    />
                                </div>
                                {/* 네번쨰 이미지 */}
                                <div className="w-52 h-60 bg-gray-400">
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="alimzone1"
                                    />
                                </div>
                            </MultiCarousel>
                        </div>
                    </div>
                </div>
            </div>

            {/* 유관기관 */}
            <div className="w-full px-4">
                <div className="grid grid-cols-5 gap-16 items-end">
                    {/* 타이틀 */}
                    <div>
                        <TitleTwoRow main="유관기관" sub="family sites" />
                    </div>
                    {/* 캐러셀 이미지 */}
                    <div className=" col-span-4">
                        <MultiCarousel itemNum={5}>
                            {Array(9)
                                .fill("")
                                .map((_, i) => (
                                    <div key={i}>
                                        <img
                                            src={`https://www.daeguoperahouse.org/images/main/img_ban0${
                                                i + 1
                                            }_on.png`}
                                            alt="image family site"
                                        />
                                    </div>
                                ))}
                        </MultiCarousel>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
