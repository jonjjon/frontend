import React from "react"
import { useNavigate } from "react-router-dom"
import "../css/main.css"

export default function Main() {
    const navigate = useNavigate()
    const goToEduIndex = () => {
        navigate("/eduindex")
    }
    const goToEduIDE = () => {
        navigate("/ide")
    }
    const goToMypage = () => {
        navigate("/mypage")
    }
    return (
        <>
            <div className="center-align entire">
                <div className="center-align middle">
                    <div className="main-font">EDU MAIN PAGE</div>
                    <div className="sub-title-font">코딩 교육계의 프로그래머스</div>
                    <div className="code-hub-font">"Code Hub"</div>
                    <div onClick={goToEduIndex} className="center-align login-button">학습목차 열람</div>
                    <div onClick={goToMypage} className="center-align login-button">마이페이지</div>
                    <div onClick={goToEduIDE} className="center-align login-button">실습페이지</div>
                </div>
            </div>
        </>
    )
} 