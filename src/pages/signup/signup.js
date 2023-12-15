import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [nickname, setNickname] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const [nicknameError, setNicknameError] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repasswordError, setRepasswordError] = useState('');

  const [isNicknameCheck, setIsNicknameCheck] = useState(false);
  const [isUserIdCheck, setIsUserIdCheck] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const [isUserIdAvailable, setIsUserIdAvailable] = useState(false);

  const validateNickname = (value) => {
    // 닉네임은 8자 이하
    if (value.length > 8) {
      setNicknameError('닉네임은 8자 이하로 입력해주세요.');
      setIsNicknameAvailable(false);
    } else {
      setNicknameError('');
      setIsNicknameAvailable(true);
    }
  };

  const validatePassword = (value) => {
    // 비밀번호는 대소문자와 숫자를 모두 포함하고 10글자 이상
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('대소문자와 숫자를 모두 포함하고 10글자 이상으로 입력해주세요.');
      setIsUserIdAvailable(false);
    } else {
      setPasswordError('');
      setIsUserIdAvailable(true);
    }
  };

  const checkNicknameAvailability = async () => {
    try {
      // 중복 체크 버튼이 눌리지 않았을 때 초기화
      setIsNicknameCheck(false);

      const response = await fetch(`/api/checkNickname?nickname=${nickname}`);

      if (response.ok) {
        const data = await response.json();
        setIsNicknameCheck(true);
        setIsNicknameAvailable(data.available);
        setNicknameError(data.available ? '' : '이미 사용 중인 닉네임입니다.');
      } else {
        console.log('서버 오류');
      }
    } catch (error) {
      console.error('Error during nickname check:', error);
      console.log('네트워크 오류');
    }
  };

  const checkUserIdAvailability = async () => {
    try {
      // 중복 체크 버튼이 눌리지 않았을 때 초기화
      setIsUserIdCheck(false);

      const response = await fetch(`/api/checkUserId?userId=${userId}`);

      if (response.ok) {
        const data = await response.json();
        setIsUserIdCheck(true);
        setIsUserIdAvailable(data.available);
        setUserIdError(data.available ? '' : '이미 사용 중인 아이디입니다.');
      } else {
        console.log('서버 오류');
      }
    } catch (error) {
      console.error('Error during user ID check:', error);
      console.log('네트워크 오류');
    }
  };

  const onChangeNicknameHandler = (e) => {
    const value = e.target.value;
    setNickname(value);
    setIsNicknameCheck(false);
    validateNickname(value);
    // 닉네임 유효성검사 로직 추가
  };

  const onChangeUserIdHandler = (e) => {
    const value = e.target.value;
    setUserId(value);
    setIsUserIdCheck(false);
    // 아이디 유효성검사 로직 추가
  };

  const onChangePasswordHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
      validatePassword(value);
    } else {
      setRepassword(value);
      // 비밀번호 확인 로직 추가
      if (password !== value) {
        setRepasswordError('비밀번호가 일치하지 않습니다.');
      } else {
        setRepasswordError('');
      }
    }
  };

  const onClickSignup = async () => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname,
          userId,
          password,
          repassword,
        }),
      });

      if (response.ok) {
        // 회원가입 성공
        const data = await response.json();
        console.log(data);
      } else if (response.status === 400) {
        // 회원가입 실패
        const data = await response.json();
        console.log(data);
      } else {
        // 다른 오류
        console.log('서버 오류');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      console.log('네트워크 오류');
    }
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', width: '100%', height: '800px' }}>
      <form>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '60%', margin: 'auto' }}>
          <h1>회원가입</h1>
          <div style={{ width: '340px', margin: 'auto', marginTop: '40px', borderBottom: '2px solid' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input
                type="text"
                placeholder="닉네임" name="nickname" value={nickname}
                onChange={onChangeNicknameHandler}
                style={{
                  border: 'none',
                  width: '310px',
                  height: '30px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              />
              <button
                type="button"
                style={{
                  width: '80px',
                  height: '25px',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  backgroundColor: 'darkgray',
                }}
              >
                중복 체크
              </button>
            </label>
            {nicknameError && (
              <div style={{ fontSize: '10px', color: 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                <p>{nicknameError}</p>
              </div>
            )}
            {isNicknameCheck && (
              <div style={{ fontSize: '10px', color: 'blue', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                <p>중복 체크 완료</p>
              </div>
            )}
          </div>
          <div
            style={{
              width: '340px',
              fontSize: '10px',
              color: 'gray',
              marginTop: '-8px',
              fontWeight: 'bold',
              margin: 'auto',
              textAlign: 'left'
            }}
          >
            <p>*8자 이하</p>
          </div>
          <div
            style={{
              width: '340px',
              margin: 'auto',
              borderBottom: '2px solid',
              marginTop: '30px',
              marginBottom: '50px'
            }}>
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input
                type="text"
                placeholder="아이디" name="userId" value={userId}
                onChange={onChangeUserIdHandler}
                style={{
                  border: 'none',
                  width: '310px',
                  height: '30px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              />
              <button
                type="button"
                style={{
                  width: '80px',
                  height: '25px',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  backgroundColor: 'darkgray',
                }}
              >
                중복 체크
              </button>
            </label>
            {userIdError && (
              <div style={{ fontSize: '10px', color: 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                <p>{userIdError}</p>
              </div>
            )}
            {isUserIdCheck && (
              <div style={{ fontSize: '10px', color: 'blue', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                <p>중복 체크 완료</p>
              </div>
            )}
          </div>
          <div style={{ width: '340px', margin: 'auto' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input
                type="password"
                placeholder="비밀번호" name="password" value={password}
                onChange={onChangePasswordHandler}
                style={{
                  border: 'none',
                  borderBottom: 'solid 2px',
                  width: '340px',
                  height: '30px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              />
              <div style={{
                border: 'none',
                borderBottom: 'solid 2px'
              }}>
                <i>눈</i>
              </div>
            </label>
            {passwordError && (
              <div style={{ fontSize: '10px', color: 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                <p>{passwordError}</p>
              </div>
            )}
          </div>
          <div style={{ marginTop: '30px', marginBottom: '30px', width: '340px', margin: 'auto' }}>
            <label>
              <input
                type="password"
                placeholder="비밀번호 확인" name="repassword" value={repassword}
                onChange={onChangePasswordHandler}
                style={{
                  border: 'none',
                  borderBottom: 'solid 2px',
                  width: '340px',
                  height: '30px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              />
            </label>
            {repasswordError && (
              <div style={{ fontSize: '10px', color: 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                <p>{repasswordError}</p>
              </div>
            )}
          </div>
        </div>
        <div style={{
          backgroundColor: 'white', width: '60%', margin: 'auto'
        }}>
          <button
            type="button"
            onClick={onClickSignup}
            disabled={!isNicknameAvailable || !isUserIdAvailable}
            style={{
              width: '270px',
              height: '40px',
              border: 'none',
              borderRadius: '50px',
              fontSize: '17px',
              fontWeight: 'bold',
              backgroundColor: 'darkgray',
              marginTop: '40px',
              marginBottom: '40px',
              cursor: !isNicknameAvailable || !isUserIdAvailable ? 'not-allowed' : 'pointer',
            }}
          >
            회원가입
          </button>
          <br />
          <span style={{ fontWeight: 'bold' }}>이미 회원이신가요?</span>
          <span role="button"
            style={{
              marginLeft: '40px',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'black'
            }}><Link to='/login'>로그인하기</Link></span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
