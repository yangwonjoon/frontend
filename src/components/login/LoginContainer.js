import eye from "../../assets/eye.svg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from "recoil";
import { userAtom } from "../../recoil/atoms/userAtom";

axios.defaults.withCredentials = true;


function LoginContainer() {


    const [userAt, setUserAt] = useRecoilState(userAtom)
    const navigate = useNavigate();
    const config = { "Content-Type": 'application/json' }; //json 형태로

    // 비밀번호 가리기/보이기를 처리하는 state
    const [showPassword, setShowPassword] = useState(false);

    // 사용자 아이디와 비밀번호를 저장하는 state
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    useEffect(() => {
        console.log(userAt)
    }, [userAt])

    const handleLogin = async () => {
        try {
            // 서버에 로그인 요청
            const response = await axios.post('http://localhost:8080/api/login', {
                userID: userId,
                userPW: userPw,
            }, config);

            // 로그인 성공 시
            if (response && response.data && response.data.status === 'success') {
                // setUserAt(true)
                // console.log(userAt)
                navigate('/')
                // 'set-cookie' 헤더가 존재하고 비어있지 않은 경우에만 저장
                // if (response.headers['Set-cookie'] && response.headers['Set-cookie'].length > 0) {
                //     // 쿠키에서 JSESSIONID만 추출하여 저장
                //     const jSessionId = response.headers['Set-cookie'][0].split(';')[0];
                //     sessionStorage.setItem('JSESSIONID', jSessionId);


                //     // 콘솔에 저장된 JSESSIONID 출력
                //     console.log('세션 스토리지에 저장된 JSESSIONID:', JSON.stringify(jSessionId));
                // } else {
                //     console.log("실패")
                // }
            } else {
                console.log('로그인 실패:', response.data.message);
            }
        } catch (error) {
            // 에러 처리
            console.error('로그인 중 오류 발생:', error);
            console.log('서버 응답:', error.response);

            if (error.response && error.response.data) {
                console.log('로그인 실패:', error.response.data.message);
            }
        }
    };

    // 컴포넌트가 마운트될 때 세션 스토리지에서 JSESSIONID를 가져와 axios 설정에 추가
    // useEffect(() => {
    //     const sessionStorageJSessionId = sessionStorage.getItem('JSESSIONID');
    //     if (sessionStorageJSessionId) {
    //         axios.defaults.headers.common['Cookie'] = sessionStorageJSessionId;
    //     }
    // }, []);

    return (
        <div className="mt-5 flex w-full p-4">
            <div className="flex h-[30rem] w-full flex-col items-center justify-center bg-[#fefefe] pb-7">
                <span className="font-DoHyeon mb-14 text-2xl">로그인</span>
                <div className="flex flex-col">
                    <div className="mt-5 flex border-b-[1px] border-[#000000]">
                        <input
                            name='userId'
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            type="text"
                            placeholder="아이디"
                            className="font-Pretendard placeholder:font-DoHyeon h-7 w-64 outline-none placeholder:text-sm placeholder:text-[#000000]"
                        />
                    </div>
                    <div className="mt-5 flex border-b-[1px] border-[#000000]">
                        <input
                            name='userPw'
                            value={userPw}
                            onChange={(e) => setUserPw(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            placeholder="비밀번호"
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