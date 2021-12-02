import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsename] = useState('')
    const [password, setPassword] = useState('')
    const [error, seterror] = useState('')

    //This is Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'project-ID': "a9b281bd-170f-476d-8816-e1242717d294", 'User-Name': username, 'User-Secret': password };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();

        } catch (error) {
            seterror('Please Enter Correct Usename and Password.')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsename(e.target.value)} className="input" placeholder="UserName" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Starting Chating</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )
}

export default LoginForm
