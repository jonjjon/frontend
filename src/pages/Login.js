import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/main.css"
import "../css/login.css"

export default function Login() {
    const navigate = useNavigate()
    const goToSignup = () => {
        navigate("/signup")
    }
    const goToEduMain = () => {
        navigate("/edumain")
    }
    return (
        <>
            <div className="center-align entire">
                <div className="center-align middle">
                    <div className="main-font">코헙</div>
                    <div className="login-title">이메일</div>
                    <input className="login-input" />
                    <div className="login-title">비밀번호</div>
                    <input className="login-input" />
                    <div onClick={goToEduMain} className="center-align login-button">로그인 하기</div>
                    <div onClick={goToSignup} className="sub-text">비밀번호를 잊어버렸나요?</div>
                </div>
            </div>
        </>
    )
}