import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleLoginRedux } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
function Login() {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShowPass, setIsShowPass] = useState(false)
    const loading = useSelector(state => state.user.isLoading)
    const account = useSelector(state => state.user.account)

    const handleLogin = async() => {
        if(!email || !password){
            toast.error("Email/Password is required!")
            return
        }
        
        dispatch(handleLoginRedux(email, password))
      
    }

    const handleGoBack = () => {
        navigate('/')
    }

    const handlePressEnter = (e) => {
        if(e.key === 'Enter'){
            handleLogin()
        }
    }

    useEffect(() => {
        if(account && account.auth === true){
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account])
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