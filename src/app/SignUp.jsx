import { useState } from "react";
import ButtonSlide from "../components/ButtonSlide";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

export default function SignUp() {
    const customStyles = {
        content: {
            width: "600px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const [ModalISOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    return (
        <div>
            <Layout>
                <Modal
                    isOpen={ModalISOpen}
                    style={customStyles}
                    onRequestClose={closeModal}
                ></Modal>
                <LayoutContents>
                    <form>
                        <table className="table_top w-full">
                            <tbody>
                                <tr>
                                    <td className="table_td border-l-0">
                                        회원아이디
                                    </td>
                                    <td className="table_td border-l-0 space-x-2">
                                        <input
                                            {...register("username", {
                                                required:
                                                    "아이디는 필수 입력 항목입니다.",
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        "아이디는 6자 이상 입력해야 합니다.",
                                                },
                                            })}
                                            type="text"
                                            className="border border-neutral-300 p-2"
                                        />
                                        <span className="text-red-500 text-md">
                                            {errors?.username?.message}
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table_td border-l-0">
                                        비밀번호
                                    </td>
                                    <td className="table_td border-l-0">
                                        <input
                                            {...register("password")}
                                            type="password"
                                            className="border border-neutral-300 p-2"
                                        ></input>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table_td border-l-0">
                                        비밀번호 확인
                                    </td>
                                    <td className="table_td border-l-0 space-x-2">
                                        <input
                                            {...register("password2")}
                                            type="password"
                                            className="border border-neutral-300 p-2"
                                        ></input>
                                        {watch("password") !==
                                            watch("password2") && (
                                            <span className="text-red-500 text-md">
                                                비밀번호를 다시 확인해주세요
                                            </span>
                                        )}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table_td border-l-0">
                                        이름
                                    </td>
                                    <td className="table_td border-l-0">
                                        <input
                                            {...register("name")}
                                            type="text"
                                            className="border border-neutral-300 p-2"
                                        ></input>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table_td border-l-0">
                                        휴대전화
                                    </td>
                                    <td className="table_td border-l-0">
                                        <input
                                            {...register("mobile")}
                                            type="text"
                                            className="border border-neutral-300 p-2"
                                        ></input>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="table_td border-l-0">
                                        이메일
                                    </td>
                                    <td className="table_td border-l-0 space-x-2">
                                        <input
                                            {...register("email", {
                                                required:
                                                    "이메일 항목은 필수 입력 사항입니다.",
                                                minLength: {
                                                    value: 5,
                                                    message:
                                                        "최소 5자 이상 작성해 주셔야 합니다.",
                                                },
                                                pattern: {
                                                    value: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
                                                    message:
                                                        "이메일 형식을 맞춰 주셔야 합니다.",
                                                },
                                            })}
                                            type="email"
                                            className="border border-neutral-300 p-2"
                                        ></input>
                                        <span className="text-red-300 text-md">
                                            {errors?.email?.message}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table_td border-l-0">
                                        주소
                                    </td>
                                    <td className="table_td border-l-0">
                                        <div className="space-x-1">
                                            <input
                                                {...register("zipcode")}
                                                disabled
                                                type="text"
                                                className="border border-neutral-300 p-2 bg-neutral-50"
                                            />
                                            <button
                                                onClick={openModal}
                                                type="button"
                                                className="px-4 py-2 rounded text-sm border border-neutral-300 hover:shadow-md"
                                            >
                                                우편번호검색
                                            </button>
                                        </div>
                                        <div className=" space-y-1">
                                            <input
                                                {...register("address1")}
                                                disabled
                                                type="text"
                                                className="border w-full border-neutral-300 p-2"
                                            />
                                            <input
                                                {...register("address2")}
                                                type="text"
                                                className="border border-neutral-300 p-2 w-full"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="w-full flex justify-center  py-8 space-x-2">
                            <ButtonSlide text="회원가입" />
                            <ButtonSlide text="메인으로" />
                        </div>
                    </form>
                </LayoutContents>
            </Layout>
        </div>
    );
}
