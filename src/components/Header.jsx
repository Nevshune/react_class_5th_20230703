import { Link } from "react-router-dom";
import LogoAsset from "./asset/LogoAsset";
import SearchAsset from "./asset/SearchAsset";
import useUser from "../hooks/useUser";

const GNB = [
    {
        mainTitle: "공연안내",
        subTitle: "Performance",
        link: "/information",
    },
    {
        mainTitle: "공간 대관안내",
        subTitle: "Rental",
        link: "/rental",
    },
    {
        mainTitle: "멤버십",
        subTitle: "Membership",
        link: "/membership",
    },
    {
        mainTitle: "아카데미",
        subTitle: "Academy",
        link: "/academy",
    },
    {
        mainTitle: "커뮤니티",
        subTitle: "Community",
        link: "/community",
    },
    {
        mainTitle: "대구엑스포",
        subTitle: "Contact",
        link: "/contact",
    },
];

export default function Header() {
    const { userLoading, isLoggedIn, user } = useUser();
    console.log(userLoading, isLoggedIn, user);
    const temp = "w-full flex justify-center h-header-height shadow-md";
    return (
        <div className={temp}>
            {/* 좌우 여백을 위한 박스 */}
            <div className="w-full flex justify-center px-layout-padding ">
                <div className="w-full flex justify-center relative">
                    {/* 메뉴리스트 */}
                    <div className="w-full flex justify-center items-center space-x-16">
                        {GNB.map(({ mainTitle, subTitle, link }) => (
                            <Link key={mainTitle} to={link}>
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-lg font-semibold">
                                        {mainTitle}
                                    </h1>
                                    <p className="uppercase text-sm font-light">
                                        {subTitle}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* LOGO */}
                    <div className="absolute left-0 h-full flex items-center bg">
                        {/* <link to={"/"}> */}
                        <LogoAsset width="w-148" />
                        {/* </link> */}
                    </div>
                    {/* 오른쪽상단 */}
                    <div className="absolute flex space-x-8 right-0 top-0 items-center uppercase">
                        <div>
                            <SearchAsset />
                        </div>
                        <div>HOME</div>
                        {isLoggedIn === "true" ? (
                            <>
                                <Link to="/signin">
                                    <div>Login</div>
                                </Link>
                                <Link to="/signup">
                                    <div>Join</div>
                                </Link>
                            </>
                        ) : (
                            <>
                                <div>{user.username} 님</div>
                                <div>로그아웃</div>
                            </>
                        )}
                        <select
                            size="sm"
                            className="border border-neutral-300 text-sm rounded-sm py-1 px-2"
                        >
                            <option>한국어</option>
                            <option>English</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
