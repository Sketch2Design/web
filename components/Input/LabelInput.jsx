import Input from './Input'

export default function LabelInput({ name, type, placeholder, icon }) {
    return (
        <div className="flex flex-col space-y-1">
            <div className="flex justify-between items-center">
                <label className="font-bold text-xl" htmlFor={name}>
                    {placeholder}
                </label>
                {icon && (
                    <span className="cursor-pointer text-lg text-zinc-500">
                        {icon}
                    </span>
                )}
            </div>
            <Input type={type} placeholder={placeholder} name={name} />
        </div>
    )
}
