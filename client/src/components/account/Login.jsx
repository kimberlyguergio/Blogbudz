import { useState, useContext } from 'react';

import { Box, TextField, Button, styled, Typography } from '@mui/material';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

import { useNavigate } from 'react-router-dom';


const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 230, 
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #000000;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`

const SignUpButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #000000;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Error = styled(Typography)`
color: #ff6161;
font-size: 10px;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`

const Text = styled(Typography)`
    color: #000000;
    font-size: 14px;
`
const signupInitialValues = {
    name: '',
    username: '',
    password: ''
  };
  
  const loginInitialValues = {
    username: '',
    password: ''
  };

const Login = ({ isUserAuthenticated }) => {

    const image = require('./blogbudz.png'); 

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState('');

    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSignup = () => {
       account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value});
    }
    
    const signupUser = async () => {
        let response = await  API.userSignup(signup);
        if(response.isSuccess) {
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login')
        } else {
            setError('Something went wrong! Please try again later');
        }
    }

    const  onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value});

    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if(response.isSuccess) {
            setError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

            setAccount({ username: response.data.username, name: response.data.name})
            
            isUserAuthenticated(true);

            navigate('/');

        } else {
            setError('Something went wrong! Please try again later');
        }

    }

return(
    <Component>
        <Box>
            <Image src={image} alt="login" />
            {
                account === 'login' ? 
                    <Wrapper>

                        <TextField variant="standard" value={login.username || ''} onChange={(e) => onValueChange(e)} name="username" label="Enter username" />
                        <TextField variant="standard" value={login.password || ''} onChange={(e) => onValueChange(e)} name="password" label="Enter password" />

                        {/* <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name="username" label="Enter username" />
                        <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name="password" label="Enter password" /> */}

                        { error && <Error>{error}</Error>}
                        <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                        <Text style={{ textAlign:'center' }}>OR</Text>
                        <SignUpButton onClick={() => toggleSignup()}>Create an account</SignUpButton>
                    </Wrapper>
                :
                    <Wrapper>
                        <TextField variant="standard" value={signup.name || ''} onChange={(e) => onInputChange(e)} name='name' label="Enter Name" />
                        <TextField variant="standard" value={signup.username || ''} onChange={(e) => onInputChange(e)} name='username' label="Enter Username" />
                        <TextField variant="standard" value={signup.password || ''} onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />

                        {/* <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Enter Name" />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter Username" />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" /> */}

                        { error && <Error>{error}</Error>}
                        <SignUpButton  onClick={() => signupUser()}>Sign Up</SignUpButton>
                        <Text style={{ textAlign:'center' }}>OR</Text>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                    </Wrapper> 
             }   
        </Box>    
    </Component>
)
}

export default Login;