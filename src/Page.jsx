import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";

export default function Page() {
    return (
        <Layout>
            <div className="w-full h-screen-minus-header overflow-hidden">
                {/* 메인캐러셀 이미지 */}
                <CarouselMain />
            </div>
        </Layout>


    )
}