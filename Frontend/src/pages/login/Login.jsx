import './Login.scss';
import SapoLogo from './Sapo-logo.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../api/useAuth';
import { getCookie } from '../../utils/api';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleMutationEvent = {
        onSuccess: () => {
            const storageKey = JSON.parse(localStorage.getItem('storageKey'))
            const jwt = getCookie('Authorization')
            if(jwt){
                if(storageKey.role==="STUDENT"){
                    navigate('/student/teacher')
                    window.location.reload()
                }
                if(storageKey.role==="TEACHER"){
                    navigate('/teacher/liststudent')
                    window.location.reload()
                }
            }
        },
        onError: () => {
            alert('error');
        },
    };
    const jwt = getCookie('Authorization')
    console.log(jwt)
    const storageKey = JSON.parse(localStorage.getItem('storageKey'))
    console.log(storageKey)

    const { mutate: login } = useLogin(handleMutationEvent);

    const handleLogin = () => {
        console.log(username, password)
        login({ username, password });
        const jwt = getCookie('Authorization')
        if(!jwt){
            login({ username, password });
        }
    };

    return (
        <div className="login-wrapper">
            <div className="loginform">
                <h2>HỆ THỐNG QUẢN LÝ ĐỒ ÁN</h2>
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Tài khoản" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" />
                <button onClick={handleLogin}>Đăng nhập</button>
            </div>
        </div>
    );
}

export default Login;
