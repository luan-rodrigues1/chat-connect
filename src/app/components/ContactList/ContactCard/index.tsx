export default function ContactCard({message}: any) {

    // const colorsArray = ["blue", "red"];
    // const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];

    function stringToColor(str: string) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
    
        const color = "#" + ((hash & 0x00FFFFFF).toString(16).toUpperCase().padStart(6, '0'));
    
        return color;
    }
    
    

    return (
        <li className="flex items-center gap-2 border-b-2 border-gray-300 px-2 h-20">
            <div className="flex w-8 h-8 justify-center items-center text-white" 
            style={{backgroundColor: `${stringToColor(message.name)}`, borderRadius: "50%"}}>{message.name[0]}</div>
            <h2 className="font-semibold text-sm">{message.name}</h2>
        </li>
    )
}