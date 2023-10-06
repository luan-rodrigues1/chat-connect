'use client'
import { socket } from "@/config/socket"
import { useState, useEffect } from "react"

export default function Home() {
    const [socketInstance] = useState(socket())
    const [messages, setMessages] = useState<any[]>([])
    const [inputValue, setInputValue] = useState<string>("")

    const handleSubmit = () => {

        socketInstance.emit("message", {teste: inputValue, teste2: "mais ifno"});
        setInputValue("")
    }

    useEffect(() => {
        socketInstance.on("message", (message) => {
            setMessages([...messages, message]);
        })

        return () => {
            socketInstance.off("message")
        }
    }, [messages, setMessages, socketInstance])

  return (
    <main className="h-full">
        <h1>Teste chat</h1>
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
        </section>
    </main>
    
  )
}