import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Login() {
    const [userId, setUserid] = useState('')
    const [userPw, setUserPw] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    // const history = useHistory();

        // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleuserId = (e) => {
        setUserid(e.target.value)
    }

    const handleuserPw = (e) => {
        setUserPw(e.target.value)
    }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

        //Login 버튼 클릭 이벤트
        const onClickLogin = async () => {
            try {
                if (!userId || !userPw) {
                    console.error('아이디와 비밀번호를 모두 입력하세요');
                    return;
                }
        
                const response = await axios.post(
                    'https://localhost:8080/api/login', {
                    userId: userId,
                    userPw: userPw,
                },
                {
                    withCredentials:true,
                    headers: {
                        'Content-Type':'application/json',
                    },
                })
        
                if (response.data === 'success') {
                    console.log('로그인 성공');
                    // 로그인 성공 시 다음 페이지로 이동하도록 설정
                    // history.push('/main');
                    sessionStorage.setItem('userId', userId);
                    sessionStorage.setItem('isLoggedIn', 'true');

                } else {
                    console.log('로그인 실패');
                    // 로그인 실패 시 사용자에게 알림 설정
                }
            } catch (error) {
                console.error('로그인 실패', error);
                // 에러 발생 시 사용자에게 알림 설정
            }
        };
  // 페이지 로딩 시 세션 스토리지에서 로그인 상태 확인
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      console.log('이미 로그인되어 있습니다.');
      // 로그인 상태에 따른 처리 추가
    }
  }, []);

        // useEffect(() => {
        //     axios.get('https://localhost:8080/api/login')
        //         .then(res => {
        //             console.log(res);
        //             // 응답에 대한 처리 추가
        //         })
        //         .catch(err => console.error(err));
        // },
        // // 페이지 호출 후 처음 한 번만 호출될 수 있도록 [] 추가
        // []);

    return (
        // <Router>
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
          height:'500px',
          backgroundColor: 'white',
          
        }}>
          <h1>로그인</h1>
          <div style={{ marginTop: '100px' }}>
            <label>
              <input type="text" placeholder="아이디" name='userId' onChange={handleuserId} value={userId}
                style={{
                  width: '280px',
                  border: 'none',
                  borderBottom: 'solid 2px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              />
            </label>
          </div>
          <div style={{ width: '280px', margin: 'auto',marginTop:'30px' }}>
            <label style={{ display: 'flex', justifyContent: 'center' }}>
              <input type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호" name='userPw' onChange={handleuserPw} value={userPw}
                style={{
                  width: '280px',
                  border: 'none',
                  borderBottom: 'solid 2px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              />
              <div onClick={toggleShowPassword}
              style={{
                border: 'none',
                borderBottom: 'solid 2px'
              }}>
                <i>눈</i>
              </div>
            </label>
          </div>
          <br />
          <button type="button" onClick={onClickLogin}
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
            }}>
            로그인
          </button>
          <div>
            <span style={{
              fontWeight: 'bold',
              fontSize:'13px'
            }}>아직 회원이 아니신가요?</span>
            <span role="button"
              style={{
                marginLeft: '50px',
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'black',
                fontSize:'13px'
              }}> <Link to='/signup'>회원가입</Link></span>
          </div>
        </form>
      </div>
    //   </Router>
    );
}        
  
  
  export default Login;
  