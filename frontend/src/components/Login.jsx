import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      )

      const result = await response.json()

      console.log('Login result:', result)

      if (result && result.id) {
        localStorage.setItem('userId', result.id)

        setMessage('Login successful!')

        setTimeout(() => {
          navigate('/home')
        }, 1000)
      } else {
        setMessage('Email or password is incorrect.')
      }

    } catch (error) {
      console.error(error)
      setMessage('Backend connection error.')
    }
  }

  return (
    <div className="login">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      <p>{message}</p>
    </div>
  )
}

export default Login