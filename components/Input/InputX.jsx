export default function InputX({ name, type, placeholder }) {
    return (
        <>
            <input
                className={`text-zinc-500 px-4 bg-zinc-800 w-80 h-16 rounded-md outline-none
            focus:border focus:border-violet-600 
            placeholder:text-zinc-500`}
                type={type}
                placeholder={placeholder}
                name={name}
            />
        </>
    )
}
