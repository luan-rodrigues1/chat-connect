export default function Chat() {

    const messageMock = {
        id: 1,
        image: "L",
        name: "Luan",
        lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        online: true 
            
    }

    return (
        <aside className="w-full">
            <header  className="flex gap-4 w-full h-12 items-center mt-1">
                <div>{messageMock.image}</div>
                <div className="flex-col items-start">
                    <p>{messageMock.name}</p>
                    <span>{messageMock.online ? "Online" : "Offline"}</span>
                </div>
            </header>
        </aside>
    )

}