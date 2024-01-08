import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = () => {
  // 사용자 아이디와 비밀번호를 저장하는 state
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  // 비밀번호 가리기/보이기를 처리하는 state
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      // 서버에 로그인 요청
      const response = await axios.post('http://localhost:8080/api/login', {
        userID: userId,
        userPW: userPw,
      });

      // 로그인 성공 시
      if (response && response.data && response.data.status === 'success') {
        console.log('로그인 성공:', response.data);
        navigate('/')

        // 'set-cookie' 헤더가 존재하고 비어있지 않은 경우에만 저장
        if (response.headers['Set-cookie'] && response.headers['Set-cookie'].length > 0) {
          // 쿠키에서 JSESSIONID만 추출하여 저장
          const jSessionId = response.headers['Set-cookie'][0].split(';')[0];
          sessionStorage.setItem('JSESSIONID', jSessionId);

          // 콘솔에 저장된 JSESSIONID 출력
          console.log('세션 스토리지에 저장된 JSESSIONID:', jSessionId);
        }
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
  useEffect(() => {
    const sessionStorageJSessionId = sessionStorage.getItem('JSESSIONID');
    if (sessionStorageJSessionId) {
      axios.defaults.headers.common['Cookie'] = sessionStorageJSessionId;
    }
  }, []);

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/logout');

  //     if (response && response.data && response.data.status === 'success') {
  //       console.log('로그아웃 성공');
  //       // Clear the JSESSIONID from sessionStorage
  //       sessionStorage.removeItem('JSESSIONID');
  //     } else {
  //       console.log('로그아웃 실패:', response.data.message);
  //     }
  //   } catch (error) {
  //     console.error('로그아웃 중 오류 발생:', error);
  //     console.log('서버 응답:', error.response);

  //     if (error.response && error.response.data) {
  //       console.log('로그아웃 실패:', error.response.data.message);
  //     }
  //   }
  // };

  return (
    <div style={{
      backgroundColor: '#F5F5F5',
      width: '100%',
      height: '690px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form style={{
        width: '60%',
        height: '500px',
        backgroundColor: 'white'
      }}>
        <h1 style={{ textAlign: 'center' }}>로그인</h1>
        <div style={{ marginTop: '50px' }}>
          <label>
            <input
              type="text"
              placeholder="아이디"
              name='userId'
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                fontSize: '18px'
              }}
            />
          </label>
        </div>
        <div style={{ marginTop: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호"
              name='userPw'
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
              style={{
                width: 'calc(100% - 22px)',
                padding: '10px',
                fontSize: '18px'
              }}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              style={{
                cursor: 'pointer',
                marginLeft: '-20px',
                padding: '10px',
                borderBottom: 'solid 2px #3498db',
              }}
            >
              {/* 비밀번호 가리기/보이기 아이콘 */}
            </div>
          </label>
        </div>
        <br />
        <button
          type="button"
          onClick={handleLogin}
          style={{
            width: '100%',
            height: '40px',
            borderRadius: '5px',
            fontSize: '17px',
            fontWeight: 'bold',
            backgroundColor: '#3498db',
            color: 'white',
            cursor: 'pointer',
          }}>
          로그인
        </button>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <span style={{
            fontSize: '13px',
            color: '#555',
          }}>아직 회원이 아니신가요?</span>
          <span role="button"
            style={{
              marginLeft: '10px',
              fontSize: '13px',
              color: '#3498db',
              textDecoration: 'none',
            }}>
            <Link to='/signup'>회원가입</Link>
          </span>
        </div>
      </form>
      <button
        type="button"
        onClick={handleLogout}
        style={{
          width: '100%',
          height: '40px',
          borderRadius: '5px',
          fontSize: '17px',
          fontWeight: 'bold',
          backgroundColor: '#e74c3c',
          color: 'white',
          cursor: 'pointer',
          marginTop: '20px',
        }}>
        로그아웃
      </button>
    </div>
  );
};

export default Login;
