import React from "react"
import { useNavigate } from "react-router-dom"
import "../css/main.css"

export default function Main() {
    const navigate = useNavigate()

    const goToEduMain = () => {
        navigate("/edumain")
    }

    return (
        <>
                <div className="center-align middle">
                    <div className="main-font">EDU MYPAGE</div>
                    <div className="sub-title-font">코딩 교육계의 프로그래머스</div>
                    <div className="code-hub-font">"Code Hub"</div>
                    <div onClick={goToEduMain} className="center-align login-button">마이페이지 접기</div>
                </div>

        </>
    )
} 