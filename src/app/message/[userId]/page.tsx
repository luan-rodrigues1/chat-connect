import Chat from "@/app/components/Chat";
import ContactList from "@/app/components/ContactList";

export default function Message({ params }: { params: { userId: string } }) {

    return (
        <main className="flex">
            {/* <div>My params: {params.userId}</div> */}
            <ContactList/>
            <Chat/>
        </main>
    )
}