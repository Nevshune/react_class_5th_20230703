import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import SubTitle from "../components/SubTitle";
import TableRentalNotice from "../components/TableRentalNotice";

export default function RentalNotice() {
    return (
        <Layout>
            <SubTitle firstTitle="공간대관안내" secondTitle="공지사항" />
            <LayoutContents title="공지사항">
                {/* 탭 레이아웃 */}
                <div className="space-y-6">
                    {/* 검색바 */}
                    {/* 게시판 */}
                    <TableRentalNotice />
                    {/* 글쓰기 버튼 */}
                </div>
            </LayoutContents>
        </Layout>
    );
}
