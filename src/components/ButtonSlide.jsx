export default function ButtonSlide({ text, pHeight }) {
    return (
        <div className="">
            <button
                type="submit"
                className={`border 
                ${pHeight && "py-4"}
                w-full
            border-neutral-400 
            bg-gray-800 text-white 
            hover:text-neutral-600 
            hover:shadow-[inset_30rem_0_0_0] 
            hover:shadow-white duration-[400ms,700ms] 
            transition-[color,box-shadow] 
            px-6 
            py-1`}
            >
                <p>{text}</p>
            </button>
        </div>
    );
}
