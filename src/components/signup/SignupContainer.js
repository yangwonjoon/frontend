import React, { useEffect, useState } from 'react';
import eye from "../../assets/eye.svg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    //정규 표현식
    const ID_REGEX = /^^[a-zA-Z][a-zA-Z0-9]{7,}$/g; //영문자로 시작하는 영문,숫자, 8자 이상
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/; //대문자, 소문자, 숫자 활용하여 10글자 이상
    const NICKNAME_REGEX = /^.{1,8}$/ //1~8글자 모든 문자

    //formData
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        repassword: '',
        nickname: ''
    })

    //유효성 검사 여부
    const [validData, setValidData] = useState({
        userId: false,
        password: false,
        nickname: false,
    })

    //메시지
    const [msg, setMsg] = useState({
        userId: false,
        nickname: false
    })

    //signup 최종
    const [signup, setSignup] = useState({
        userId: false,
        nickname: false
    })

    //닉네임 유효성 검사
    useEffect(() => {
        const result = NICKNAME_REGEX.test(formData.nickname)
        setValidData({ ...setValidData, nickname: result })
    }, [formData.nickname])

    //id 유효성 검사
    useEffect(() => {
        const result = ID_REGEX.test(formData.userId)
        setValidData({ ...setValidData, userId: result })
    }, [formData.userId])

    //password 유효성 검사
    useEffect(() => {
        const result = PWD_REGEX.test(formData.password)
        setValidData({ ...setValidData, password: result })
    }, [formData.password])


    //닉네임 체크
    const handleNickname = async () => {

        if (validData.nickname) {
            try {
                const res = await axios.post('api/checkNickname', { nickname: formData.nickname });

                if (res.data.duplication === false) {
                    setMsg({ ...msg, nickname: '사용가능한 닉네임입니다' })
                    setSignup({ ...signup, nickname: true })
                } else {
                    setMsg({ ...msg, nickname: '이미 존재하는 닉네임입니다' })
                }

            } catch (error) {
                console.log('nickname axios error');
            }
        } else {
            setMsg({ ...msg, nickname: '1~8글자를 입력해주세요' })
        }
    };

    //아이디 체크
    const handleUserId = async () => {
        if (validData.userId) {
            try {
                const res = await axios.post('api/checkUserId', { userID: formData.userId });


                console.log(res)
                if (res.data.duplication === false) {
                    setMsg({ ...msg, userId: '사용가능한 아이디입니다' })
                    setSignup({ ...signup, userId: true })
                } else {
                    setMsg({ ...msg, userId: '이미 존재하는 아이디입니다' })
                }
            } catch {
                console.log('id axios error');
            }
        } else {
            setMsg({ ...msg, userId: '영문자로 시작하는 영문, 숫자 8자 이상 조합' })
        }
    };

    // 회원가입
    const handleSignup = async () => {
        console.log('Signup:', signup);
        console.log('Valid Password:', validData.password);
        console.log('Password Match:', formData.password === formData.repassword);

        if (signup.nickname && signup.userId && validData.password && (formData.password === formData.repassword)) {
            try {
                const response = await axios.post('api/signup', {
                    userID: formData.userId,
                    userPW: formData.password,
                    nickname: formData.nickname,
                });

                if (response.status === 201) {
                    console.log('Successful registration:', response.data);
                    navigate('/login');
                } else {
                    console.log('Sign up failed:', response.data);
                }
            } catch (error) {
                console.error('Signup axios error:', error);
            }
        } else {
            setSignup({ ...signup, nickname: false, userId: false });
            console.log('Signup error');
        }
    };

    return (
        <div className="mt-5 flex w-full p-4">
            <div className="flex h-[34rem] w-full flex-col items-center justify-center bg-[#fefefe] pb-7">
                <span className="font-DoHyeon mb-14 text-2xl">회원가입</span>
                <div className="flex flex-col items-start">
                    <div className="mt-5 flex w-72 justify-between border-b-[1px] border-[#000000]">
                        <input
                            type="text"
                            name="nickname"
                            placeholder="닉네임"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    nickname: e.target.value
                                })
                            }}
                            className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
                        />
                        <button
                            type="button"
                            onClick={handleNickname}
                            className="flex h-6 w-16 items-center justify-center rounded-2xl bg-[#70d096] text-xs font-semibold">
                            중복 체크
                        </button>
                    </div>

                    <div className="text-xs text-left font-bold mt-1">
                        {msg.nickname}
                    </div>



                    <div className="mt-4 flex w-72 justify-between border-b-[1px] border-[#000000]">
                        <input
                            type="text"
                            name="userId"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    userId: e.target.value
                                })
                            }}
                            placeholder="아이디"
                            className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
                        />
                        <button
                            type="button"
                            onClick={handleUserId}
                            className="flex h-6 w-16 items-center justify-center rounded-2xl bg-[#70d096] text-xs font-semibold">
                            중복 체크
                        </button>
                    </div>
                    <div className="text-xs text-left font-bold mt-1">
                        {msg.userId}
                    </div>

                    <div className="mt-7 flex w-72 justify-between border-b-[1px] border-[#000000]">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="비밀번호"
                            name="password"
                            onChange={(e) => setFormData({
                                ...formData,
                                password: e.target.value
                            })}
                            className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
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
                    <span className="text-xs font-medium text-[#5a5a5a]">
                        {validData.password ? null : '* 대문자, 소문자, 숫자 활용하여 10글자 이상'}
                    </span>


                    <div className="mt-4 flex w-72 justify-between border-b-[1px] border-[#000000]">
                        <input
                            name="repassword"
                            onChange={(e) => setFormData({
                                ...formData,
                                repassword: e.target.value
                            })}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="비밀번호 확인"
                            className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
                        />
                    </div>
                    <div style={{ fontSize: '10px', textAlign: 'left', fontWeight: 'bold' }}>
                        {formData.password === formData.repassword ? null : '비밀번호가 일치하지 않습니다.'}
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleSignup}
                    className="font-DoHyeon mt-14 flex h-9 w-72 items-center justify-center rounded-3xl bg-[#70d096]">
                    회원가입
                </button>
                <div className="mt-7 flex items-center justify-between space-x-20">
                    <span className="font-DoHyeon text-xs font-light">
                        이미 회원이신가요?
                    </span>
                    <span
                        role="button"
                        className="font-DoHyeon text-xs font-bold hover:cursor-pointer"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        로그인하기
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Signup;
