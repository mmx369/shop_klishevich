import { useRef, useState } from 'react'
import Layout from '../components/layout'

export default function Login() {
  //TODO: make form another way
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)

  const [message, setMessage] = useState<any>(null)

  const handleLogin = async () => {
    const resp = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passRef.current?.value,
      }),
    })
    const json = await resp.json()
    setMessage(json)
  }

  return (
    <Layout title="Login page">
      <div>
        {JSON.stringify(message)}
        <input type="email" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passRef} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </Layout>
  )
}
