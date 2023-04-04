import './Login.css'
import axiosInstance from '../axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate= useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email,password)

      axiosInstance
        .post('token/',{
            email: email,
            password: password,
        })
        .then((res)=> {
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization']=
                'JWT' + localStorage.getItem('access_token');
            navigate('/')

        });

    };

  return (
    <form  onSubmit={handleSubmit} className='Form__wrapper'>
      <label htmlFor="username">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default Login