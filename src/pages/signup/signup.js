import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/common/Header';
import SignupContainer from '../../components/SignupContainer';
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
