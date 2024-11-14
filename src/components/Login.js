import { useContext, useState } from "react";
import { loginApi } from "../services/userService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function Login() {

    const {loginContext} = useContext(UserContext)

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShowPass, setIsShowPass] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleLogin = async() => {
        if(!email || !password){
            toast.error("Email/Password is required!")
            return
        }
        setLoading(true)
        let res = await loginApi(email.trim(), password.trim())
        if(res && res.token){
            loginContext(email, res.token)
            navigate('/')
            
        }
        else{
            if(res && res.status === 400){
                toast.error(res.data.error)
            }
        }
        setLoading(false)
    }

    const handleGoBack = () => {
        navigate('/')
    }

    const handlePressEnter = (e) => {
        if(e.key === 'Enter'){
            handleLogin()
        }
    }
    return ( 
        <div className="login-container col-12 col-sm-4 ">
            <div className="title">Login</div>
            <div className="text fw-bold mb-2">Email or username (eve.holt@reqres.in)</div>
            <input type="text" 
                    placeholder="Email or username" 
                    className="box-input p-2 "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            <div className="position-relative">
                <input 
                    type={isShowPass ? 'text' : 'password'} 
                    placeholder="Password" 
                    className="box-input p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => handlePressEnter(e)}
                    style={{width: '100%'}}
                />
                {isShowPass ? 
                    (<i className="fa fa-eye position-absolute eye-icon" onClick={() => setIsShowPass(!isShowPass)}></i>)
                    :(<i className="fa fa-eye-slash position-absolute eye-icon" onClick={() => setIsShowPass(!isShowPass)}></i>)
                }
            </div>
            <button className={`btn-login p-2 my-3 ${email && password ? 'active' : ''}`} disabled={email && password ? false : true}
                onClick={handleLogin}
            > {loading && <i className="fa-solid fa-sync fa-spin"></i>}&nbsp;Login</button>
            <div className="back-btn mt-5">
                <i className="fa fa-chevron-left me-1"></i>
                <span onClick={handleGoBack}>Go back</span>
            </div>
        </div>
     );
}

export default Login;