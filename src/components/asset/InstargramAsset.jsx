import Instargram from "../png/instargram.png"

export default function InstargramAsset() {
 return (
    <div>
    <img
        src={Instargram}
        alt="instargram logo"
        className="w-6 h-6 group-hover:w-10 group-hover:h-10 transition-all duration-200"
    />
</div>
)
}