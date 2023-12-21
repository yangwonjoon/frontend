import React, { useState } from 'react';
import eye from "../../assets/eye.svg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nickname, setNickname] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(null);
  const [userId, setUserId] = useState('');
  const [isUserIdAvailable, setIsUserIdAvailable] = useState(null);
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const navigate = useNavigate();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const checkNicknameAvailability = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/checkNickname', { nickname });

      setIsNicknameAvailable(!response.data.duplication);
    } catch (error) {
      console.error('Error checking nickname availability:', error);
    }
  };

  const checkUserIdAvailability = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/checkUserId', { userID: userId });

      setIsUserIdAvailable(!response.data.duplication);
    } catch (error) {
      console.error('Error checking user ID availability:', error);
    }
  };

  const checkPasswordMatch = () => {
    setPasswordMatch(password === repassword);
  };

  const handleSignup = async () => {
    try {
      await checkNicknameAvailability();

      if (isNicknameAvailable === false) {
        console.log('닉네임 중복으로 회원가입 불가');
        return;
      }

      await checkUserIdAvailability();

      if (isUserIdAvailable === false) {
        console.log('아이디 중복으로 회원가입 불가');
        return;
      }

      checkPasswordMatch();

      if (!passwordMatch) {
        console.log('비밀번호 확인 불일치');
        return;
      }

      const response = await axios.post('http://localhost:8080/api/signup', {
        userID: userId,
        userPW: password,
        nickname: nickname,
      });

      if (response.status === 201) {
        console.log('회원가입 성공:', response.data);
      } else {
        console.log('회원가입 실패:', response.data);
      }
    } catch (error) {
      console.error('Error during signup:', error);
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
              value={nickname}
              placeholder="닉네임"
              onChange={(e) => setNickname(e.target.value)}
              className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
            />
            <button
            type="button"
            onClick={checkNicknameAvailability}
            className="flex h-6 w-16 items-center justify-center rounded-2xl bg-[#70d096] text-xs font-semibold">
              중복 체크
            </button>
          </div>
          <div style={{ fontSize: '10px', color: isNicknameAvailable === true ? 'blue' : 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
            {isNicknameAvailable === true ? '사용 가능' : isNicknameAvailable === false ? '사용 불가능' : ''}
          </div>
          {/* 이부분 css추가 */}
          <span className="text-xs font-medium text-[#5A5A5A]">*8자 이하</span>
          <div className="mt-4 flex w-72 justify-between border-b-[1px] border-[#000000]">
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디"
              className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
            />
            <button 
            type="button"
            onClick={checkUserIdAvailability}
            className="flex h-6 w-16 items-center justify-center rounded-2xl bg-[#70d096] text-xs font-semibold">
              중복 체크
            </button>
          </div>
          <div className="mt-7 flex w-72 justify-between border-b-[1px] border-[#000000]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                      <div style={{ fontSize: '10px', color: 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
            {passwordMatch === false ? '비밀번호가 일치하지 않습니다.' : ''}
          </div>
          {/* 이부분추가 */}
          </div>
          <span className="text-xs font-medium text-[#5a5a5a]">
            *대문자, 소문자, 숫자 활용하여 10글자 이상
          </span>
          <div className="mt-4 flex w-72 justify-between border-b-[1px] border-[#000000]">
            <input
              name="repassword"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              onBlur={checkPasswordMatch}
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호 확인"
              className="font-Pretendard placeholder:font-DoHyeon flex h-7 w-52 outline-none placeholder:text-sm placeholder:text-[#000000]"
            />
          </div>
          <div style={{ fontSize: '10px', color: 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
            {passwordMatch === false ? '비밀번호가 일치하지 않습니다.' : ''}
          </div>
          {/* 추가 */}
        </div>
        <button 
        id="signupButton"
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