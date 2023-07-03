import { Link } from "react-router-dom"
import FacebookAsset from "./asset/FacebookAsset"
import InstargramAsset from "./asset/InstargramAsset"
import KakaotalkAsset from "./asset/KakaotalkAsset"
import NaverBlogAsset from "./asset/NaverBlogAsset"

export default function LeftSide() {

    const SNS_ITEMS = [
        {icon: <FacebookAsset />, link : "https://facebook.com"},
        {icon: <NaverBlogAsset />, link : "http://blog.naver.com"},
        {icon: <InstargramAsset />, link : "https://instagram.com/"},
        {icon: <KakaotalkAsset />, link : "https://kakao.com"},
    ]

    return (
        <div className="flex flex-col w-full space-y-6 items-center">
            {SNS_ITEMS.map(({icon , link})=>(
                <Link to={link} key={link}>
                <div className="w-10 h-10 overflow-hidden border border-neutral-300 rounded-full flex justify-center items-center group">
                    {icon}
                </div>
                </Link>
            ))}
        </div>
    )
}