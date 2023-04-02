import { useRef } from 'react'

import useText from '@/utils/hooks/Editing/Text/useText'

import TextArea from '@/components/TextArea/TextArea'

export default function TextContent() {
    const textRef = useRef(null)

    const [text, settext] = useText()

    return (
        <div className="flex flex-col space-y-4">
            <TextArea
                ref={textRef}
                defaultValue={text}
                onTextChange={(val) => settext(val)}
            />
        </div>
    )
}
