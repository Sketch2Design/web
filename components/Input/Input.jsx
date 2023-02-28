export default function Input({type, placeholder}){
    return(
        <>
            <input type={type} placeholder={placeholder} 
            className="bg-zinc-800 text-zinc-500 rounded-md h-16 w-80 px-4" />
        </>
    )
}