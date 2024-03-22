import eye from "../../assets/eye.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios'; // axios import 수정

axios.defaults.withCredentials = true;


function LoginContainer() {

    const navigate = useNavigate();
    const config = { "Content-Type": 'application/json' };

    // const [userAt, setUserAt] = useRecoilState(userAtom);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        userID: '',
        userPW: ''
    })
    console.log(formData)


    const handleLogin = async () => {
        try {
            // 서버에 로그인 요청
            const response = await axios.post('api/login', formData);

        } catch (error) {
            // 에러 처리
            console.error(error.response);

        }
    };


    return (
        <div className="mt-5 flex w-full p-4">
            <div className="flex h-[30rem] w-full flex-col items-center justify-center bg-[#fefefe] pb-7">
                <span className="font-DoHyeon mb-14 text-2xl">로그인</span>
                <div className="flex-col">
                    <div className="mt-5 flex border-b-[1px] border-[#000000]">
                        <input
                            name='userId'
                            onChange={(e) => setFormData({
                                ...formData,
                                userID: e.target.value
                            })}
                            type="text"
                            placeholder="ID"
                            className="font-Pretendard placeholder:font-DoHyeon h-7 w-64 outline-none placeholder:text-sm placeholder:text-[#000000]"
                        />
                    </div>
                    <div className="mt-5 flex border-b-[1px] border-[#000000]">
                        <input
                            name='userPw'
                            onChange={(e) => setFormData({
                                ...formData,
                                userPW: e.target.value
                            })}
                            type={showPassword ? "text" : "password"}
                            placeholder="PASSWORD"
                            className="placeholder:font-DoHyeon font-Pretendard flex h-7 w-64 outline-none placeholder:text-sm placeholder:text-[#000000]"
                        />
                        <img
                            src={eye}
                            alt="eye"
                            className="flex hover:cursor-pointer"
                            onClick={() => {
                                setShowPassword(!showPassword);
                            }}
                        />
                    </div>
                </div>
                <button
                    onClick={handleLogin}
                    className="font-DoHyeon mt-14 flex h-9 w-72 items-center justify-center rounded-3xl bg-[#70d096]">
                    로그인
                </button>
                <div className="mt-7 flex items-center justify-between space-x-9">
                    <span className="font-DoHyeon text-xs font-light">
                        아직 회원이 아니신가요?
                    </span>
                    <span
                        className="font-DoHyeon text-xs font-bold hover:cursor-pointer"
                        onClick={() => {
                            navigate("/signup");
                        }}
                    >
                        회원가입
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LoginContainer;