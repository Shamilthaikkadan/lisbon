import React, { useState } from 'react'
import image from '../SIGN UP/image/Signup_img.jpg'
import '../SIGN UP/Signup.css'
function Signup() {

    const [username,setUsername] = useState ('');
    const [email,setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const [errors,setErrors] = useState({});

    const validateForm = () =>{
        const newErrors = {};
console.log(email)
        if(!email){
            newErrors.email = 'Email is required';
        }else if (!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = 'Invalid email format';
        }

        if (password.length < 6){
            console.log(password);
            newErrors.password = 'Password must be at least 6 characters';
            console.log('Password must be at least 6 characters');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault ();
        
        if(validateForm()){
            console.log('form submitted:',{email,password});
        }else{
            console.log('Form validation failed');
        }
    }

    const handleinputchange = (e)=>{
        setEmail(e.target.value)

    }
    const handleinputchange2 = (e)=>{
        setPassword(e.target.value)

    }

  return (
    <div>
        <form>
        <div className="signup_container">
            <div className="signup_subcontainer_1">
               
                <img className='signup_bg_img' src={image } alt="" />
                
               
                
                
                <div className='components'>
                <input className='signup' type="text" placeholder='Username' />
                <input className='signup' type="text" placeholder='Email Id' name='email' onChange={handleinputchange} />
                <input className='signup' type="password" placeholder='Password' onChange={handleinputchange2}/>
                <button onClick={handleSubmit} className='singup_button'>Sign Up</button>
                <div className="error">{errors.email}</div>
                </div>
               
            </div>
        </div>
        </form>
    </div>
  )
};

export default Signup