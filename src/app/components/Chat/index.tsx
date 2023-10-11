'use client'
import { socket } from "@/config/socket"
import { useState, useEffect } from "react"

export default function Chat() {

    const messageMock = {
        id: 1,
        image: "L",
        name: "Luan",
        lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        online: true 
            
    }

    const [socketInstance] = useState(socket())
    const [messages, setMessages] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState<string>("")
    console.log(messages, "fora")
    
    const senderMessage = () => {
        console.log("dentro sender message")
        socketInstance.emit('privateMessage', {
          senderId: '18d6ed72-3e53-4ef8-be9c-4c5180e1d6bf',
          recipientId: '85d16743-3795-4e50-9501-fea5d2ddff40',
          content: "teste",
        });

        // socketInstance.emit("message", "testando")
        setInputValue('');
    };
    
    

    useEffect(() => {
        console.log("dentro do user effect")
        socketInstance.on("privateMessage", ({senderId, content}) => {
            console.log("Mensagem recebida:", senderId, content);
            setMessages([...messages, content])
        });

       
        return () => {
          socketInstance.off("privateMessage");
        };
    }, [messages, setMessages, socketInstance]);

    // useEffect(() => {
    //     socketInstance.on("message", (message) => {
    //         setMessages([...messages, message]);
    //     })

    //     return () => {
    //         socketInstance.off("message")
    //     }
    // }, [messages, setMessages, socketInstance])


    return (
        <aside className="w-full flex flex-col justify-between">
            <header  className="flex gap-4 w-full h-12 items-center mt-1">
                <div>{messageMock.image}</div>
                <div className="flex-col items-start">
                    <p>{messageMock.name}</p>
                    <span>{messageMock.online ? "Online" : "Offline"}</span>
                </div>
            </header>
            <section>
                <ul>
                    {messages.map((message, index) => {
                        return (
                            <li key={index}>
                                <p>{message}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <form action="submit" onSubmit={(e) => {e.preventDefault(), senderMessage()}}>
                <input type="text" placeholder="digite aqui..."/>
                <button>Enviar</button>
            </form>
        </aside>
    )

}