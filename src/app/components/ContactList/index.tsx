'use client'
import ContactCard from "./ContactCard"
import { useRouter } from 'next/navigation'
import { socket } from "@/config/socket"
import { useState } from "react"

export default function ContactList({ userId }: { userId: string }) {

    const messageArrayMock = [
        {
            id: 1,
            name: "Luan",
            lastMessage: "Lorem ipsum dolor sit amet",
            
        },
        {
            id: 2,
            name: "Marcelo",
            lastMessage: "Lorem ipsum dolor sit amet"
        },
        {
            id: 3,
            name: "Thiago",
            lastMessage: "Lorem ipsum dolor sit amet"
        },
        {
            id: 4,
            name: "Igor",
            lastMessage: "Lorem ipsum dolor sit amet"
        },
        {
            id: 5,
            name: "Lucas",
            lastMessage: "Lorem ipsum dolor sit amet"
        }
    ]

    const router = useRouter()
    const [socketInstance] = useState(socket())

    // const infoUser = () => {
    //     const url = "http://localhost:8080/users/login";

    //     fetch(url, {
    //         method: "GET", 
    //         headers: {
    //             "Content-Type": "application/json", 
    //         }
    //     })
    //     .then(((resp) => {
    //         return resp.json()
    //     }))
    //     .then((resp => {
            
    //     }))
    // }

    const logout = () => {
        socketInstance.emit("logout", userId);
        localStorage.clear()
        router.push("/")
    
    }

    return (
        <section className="pt-4 border-r-2 border-black min-w-[280px]">
            <h1 className="px-2 mb-2">Messages</h1>
            <div className="flex gap-2 pb-2 border-b-2 border-gray-300 px-2">
                <p>All message</p>
                <span>11</span>
                <button type="button" onClick={() => logout()}>Sair</button>
            </div>
            <ul>
                {messageArrayMock.map((message) => {
                    return (
                        <ContactCard key={message.id} message={message}/>
                    )
                })}
            </ul>
        </section>
    )
}