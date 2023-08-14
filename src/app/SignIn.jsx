import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineEnter } from "react-icons/ai";
import ButtonSlide from "../components/ButtonSlide";
import KakaotalkAsset from "../components/asset/KakaotalkAsset";
import FacebookAsset from "../components/asset/FacebookAsset";
import NaverBlogAsset from "../components/asset/NaverBlogAsset";
import InstargramAsset from "../components/asset/InstargramAsset";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { userSignIn } from "../api";

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const { mutate } = useMutation(userSignIn);

    const onSubmit = (data) => {
        console.log(data);
        mutate(data);
    };

    return (
        <Layout>
            <div className="w-full flex justify-center">
                <div className="w-[400px] ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-3xl py-4 border-b-2 border-neutral-700">
                            회원정보입력
                        </h1>
                        {/* 아이디 */}
                        <div className="w-full border-b border-neutral-300 relative">
                            <input
                                {...register("username", {
                                    required: "아이디는 필수 입력항목입니다.",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "아이디는 6자 이상 입력해야 합니다.",
                                    },
                                })}
                                type="text"
                                placeholder="회원 아이디"
                                className="w-full py-8 px-4 border-0 focus:outline-none"
                            />
                            <div className="absolute right-4 top-[50%] -translate-y-50%">
                                <BsFillPersonFill />
                            </div>
                        </div>
                        {/* 아이디 에러발생 */}
                        <div className="text-red-500 text-sm">
                            {errors?.username?.message}
                        </div>
                        {/* 패스워드 */}
                        <div className="w-full border-b border-neutral-300 relative">
                            <input
                                {...register("password", {
                                    required: "패스워드를 입력 해 주세요.",
                                })}
                                type="password"
                                placeholder="비밀번호"
                                className="w-full py-8 px-4 border-0 focus:outline-none"
                            />
                            <div className="absolute right-4 top-[50%] -translate-y-50%">
                                <AiOutlineEnter />
                            </div>
                        </div>
                        {/* 패스워드 에러발생 */}
                        <div className="text-red-500 text-sm">
                            {errors?.password?.message}
                        </div>
                        {/* 버튼 */}
                        <div className="w-full py-12">
                            <ButtonSlide
                                text="login"
                                className=""
                                pHeight={"4"}
                            />
                        </div>
                    </form>
                    {/* 구분선 */}
                    <div className="w-full flex justify-center h-[1px] bg-neutral-300 relative">
                        <div className="bg-white absolute -top-3 px-2">
                            Or Login With
                        </div>
                    </div>
                    {/* 회원가입, 아이디찾기, 비밀번호 찾기 */}
                    <div className="flex justify-center w-full space-x-4 my-8">
                        <div>
                            <KakaotalkAsset />
                        </div>
                        <div>
                            <FacebookAsset />
                        </div>
                        <div>
                            <NaverBlogAsset />
                        </div>
                        <div>
                            <InstargramAsset />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
