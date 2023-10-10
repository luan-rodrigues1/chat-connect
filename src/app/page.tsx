'use client'
import { socket } from "@/config/socket"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {
    const [socketInstance] = useState(socket())
    const [inputEmailLogin, setInputEmailLogin] = useState<string>("")
    const [inputPasswordLogin, setInputPasswordLogin] = useState<string>("")
    const router = useRouter()

    // const [messages, setMessages] = useState<any[]>([])
    // const [inputValue, setInputValue] = useState<string>("")

    // const handleSubmit = () => {

    //     socketInstance.emit("message", {teste: inputValue, teste2: "mais ifno"});
    //     setInputValue("")
    // }

    // useEffect(() => {
    //     socketInstance.on("message", (message) => {
    //         setMessages([...messages, message]);
    //     })

    //     return () => {
    //         socketInstance.off("message")
    //     }
    // }, [messages, setMessages, socketInstance])


    const login = () => {

        const dataLogin = {
            email: inputEmailLogin,
            password: inputPasswordLogin
        }

        const url = "http://localhost:8080/users/login";

        fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(dataLogin)
        })
        .then(((resp) => {
            return resp.json()
        }))
        .then((resp => {
            socketInstance.emit("login", resp.id);
            localStorage.clear()
            localStorage.setItem("TOKEN", resp.token)
            router.push(`/message/${resp.id}`)
        }))

    }

  return (
    <main className="h-full">
        {/* <h1>Teste chat</h1>
        <main>
            <ul>
                {messages.map((element, index) => {
                    return (
                        <li key={index}>{element.teste}</li>
                    )
                })}
            </ul>
        </main>
        <section >
            <form 
                action="submit" 
                className='flex' 
                onSubmit={(e) => (e.preventDefault(), handleSubmit())}
            >
                <label htmlFor="">Digite sua palhaçadinha</label>
                <input 
                    type="text"  
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className='cursor-pointer' type="submit">Enviar</button>
            </form>
        </section> */}

        <form action="submit" onSubmit={(e) => (e.preventDefault(), login())} className="flex flex-col">
            <label>email</label>
            <input 
                onChange={(e) => {setInputEmailLogin(e.target.value)}} 
                type="text" 
                placeholder="Digite seu nome aqui..." 
                id="email-login"
            />
            <label>Senha</label>
            <input 
                onChange={(e) => {setInputPasswordLogin(e.target.value)}}
                type="text" 
                placeholder="Digite sua senha aqui..." 
                id="password-login"
            />
            <button type="submit">Entrar</button>
        </form>
    </main>
    
  )
}