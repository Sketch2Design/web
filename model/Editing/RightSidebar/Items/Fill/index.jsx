import EditableInput from '@/components/Input/EditableInput'

export default function Fill({
    color,
    inputRef,
    handleColorPickerOpen,
    handleColorChange,
    h,
    w,
}) {
    return (
        <div className="flex items-center space-x-4">
            <div
                className={`${h || 'h-12'} ${w || 'w-14'} rounded-md `}
                style={{ backgroundColor: color }}
                onClick={handleColorPickerOpen}
            />
            <EditableInput
                defaultValue={color?.slice(1)?.toUpperCase()}
                ref={inputRef}
                onChange={(c) => handleColorChange(`#${c.toUpperCase()}`)}
            />
        </div>
    )
}

// inputRef 2 componets sharing
