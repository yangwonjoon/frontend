import React, { useState } from 'react';
import Header from '../../components/common/Header';
import SignupContainer from '../../components/signup/SignupContainer';
import Footer from '../../components/common/Footer';

const Signup = () => {
    return (
        <>
            <Header></Header>
            <SignupContainer></SignupContainer>
            <Footer></Footer>
        </>
    )
};

export default Signup;
