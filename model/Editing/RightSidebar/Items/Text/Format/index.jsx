import useFormat from '@/utils/hooks/Editing/Text/useFormat'
import FontFormat from './FontFormat'

export default function Format() {
    const [format, setformat] = useFormat()

    return (
        <div className="flex flex-col space-y-4">
            <FontFormat
                style={format.fontStyle}
                decoration={format.textDecoration}
                setfont={setformat}
            />
        </div>
    )
}
