import Naverblog from "../png/naver_blog.png"

export default function NaverBlogAsset() {
    return (
        <div>
            <img
                src={Naverblog}
                alt="naverblog logo"
                className="w-6 h-6 group-hover:w-10 group-hover:h-10 transition-all duration-200"
            />
        </div>
    )
}