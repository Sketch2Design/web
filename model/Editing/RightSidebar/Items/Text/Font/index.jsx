import useFont from '@/utils/hooks/Editing/Text/useFont'

import FontSize from './FontSize'

export default function Font() {
    const [font, setfont] = useFont()

    return (
        <div className="flex flex-col space-y-4">
            <FontSize size={font.fontSize} setfont={setfont} />
        </div>
    )
}
