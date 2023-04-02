import { useMemo } from 'react'

import { useExternalCanvasContext } from '@/store/context/providers/CanvasProvider'

import Text from './Text'

export default function ExternalCurrentText() {
    const { externalCurrent } = useExternalCanvasContext()

    const text = useMemo(() => {
        const item = externalCurrent.values
        if (item.main === 'Text') {
            return (
                <Text
                    key={item.id}
                    textProps={{ ...item, listening: false }}
                    id={item.id}
                />
            )
        }
    }, [externalCurrent])

    return text
}
