import ContactCard from "./ContactCard"

export default function ContactList() {

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

    return (
        <section className="pt-4 border-r-2 border-black min-w-[280px]">
            <h1 className="px-2 mb-2">Messages</h1>
            <div className="flex gap-2 pb-2 border-b-2 border-gray-300 px-2">
                <p>All message</p>
                <span>11</span>
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