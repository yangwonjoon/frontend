import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignupContainer() {

    
    const navigate = useNavigate()

    const [nickname, setNickname] = useState('');
    const [isNicknameAvailable, setIsNicknameAvailable] = useState(null);
    const [userId, setUserId] = useState('');
    const [isUserIdAvailable, setIsUserIdAvailable] = useState(null);
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
        <div style={{ backgroundColor: '#f5f5f5', width: '100%', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '60%', margin: 'auto', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', boxSizing: 'border-box' }}>
                <h1 style={{ textAlign: 'center' }}>회원가입</h1>
                <div style={{ width: '340px', margin: 'auto', marginTop: '40px', borderBottom: '2px solid' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input
                            type="text"
                            placeholder="닉네임"
                            name="nickname"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
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
                            onClick={checkNicknameAvailability}
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
                    <div style={{ fontSize: '10px', color: isNicknameAvailable === true ? 'blue' : 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                        {isNicknameAvailable === true ? '사용 가능' : isNicknameAvailable === false ? '사용 불가능' : ''}
                    </div>
                </div>
                <div style={{ width: '340px', margin: 'auto', marginTop: '30px', borderBottom: '2px solid' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input
                            type="text"
                            placeholder="아이디"
                            name="userId"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
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
                            onClick={checkUserIdAvailability}
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
                    <div style={{ fontSize: '10px', color: isUserIdAvailable === true ? 'blue' : 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                        {isUserIdAvailable === true ? '사용 가능' : isUserIdAvailable === false ? '사용 불가능' : ''}
                    </div>
                </div>
                <div style={{ width: '340px', fontSize: '10px', color: 'gray', marginTop: '-8px', fontWeight: 'bold', margin: 'auto', textAlign: 'left' }}>
                    <p>*8자 이하</p>
                </div>
                <div style={{ width: '340px', margin: 'auto', marginTop: '30px', borderBottom: '2px solid' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="비밀번호"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                border: 'none',
                                borderBottom: 'solid 2px',
                                width: '340px',
                                height: '30px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}
                        />
                        <div
                            style={{
                                border: 'none',
                                borderBottom: 'solid 2px',
                            }}>
                            <i onClick={() => setShowPassword(!showPassword)}>눈</i>
                        </div>
                    </label>
                    <div style={{ fontSize: '10px', color: 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                        {passwordMatch === false ? '비밀번호가 일치하지 않습니다.' : ''}
                    </div>
                </div>
                <div style={{ width: '340px', margin: 'auto', marginTop: '30px', borderBottom: '2px solid' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="비밀번호 확인"
                            name="repassword"
                            value={repassword}
                            onChange={(e) => setRepassword(e.target.value)}
                            onBlur={checkPasswordMatch}
                            style={{
                                border: 'none',
                                borderBottom: 'solid 2px',
                                width: '340px',
                                height: '30px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}
                        />
                        <div
                            style={{
                                border: 'none',
                                borderBottom: 'solid 2px',
                            }}>
                            <i onClick={() => setShowPassword(!showPassword)}></i>
                        </div>
                    </label>
                    <div style={{ fontSize: '10px', color: 'red', textAlign: 'left', marginTop: '-5px', fontWeight: 'bold' }}>
                        {passwordMatch === false ? '비밀번호가 일치하지 않습니다.' : ''}
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', width: '60%', margin: 'auto' }}>
                    <button
                        id="signupButton"
                        type="button"
                        onClick={() => {
                            handleSignup();
                            navigate('/');
                        }}
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
                            cursor: 'pointer',
                        }}>
                        회원가입
                    </button>
                    <br />
                    <span style={{ fontWeight: 'bold' }}>이미 회원이신가요?</span>
                    <span role="button" style={{ marginLeft: '40px', fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>
                        <Link to='/login'>로그인하기</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default SignupContainer