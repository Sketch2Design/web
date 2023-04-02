import { FONT_FORMAT_ITEMS } from '@/utils/constants/editorInterface.constant'

import IconMultiSelect from '@/components/Button/IconMultiSelect'

export default function FontFormat({ style, decoration, setfont }) {
    return (
        <div className="flex items-center justify-center space-x-8 ">
            {FONT_FORMAT_ITEMS.map((item) => (
                <IconMultiSelect
                    key={item.name}
                    size="w-8 h-8"
                    icon={item.icon}
                    name={item.name}
                    current={
                        style?.includes(item.name) || decoration == item.name
                    }
                    handleSelect={() => {
                        let fontStyle = style
                        let textDecoration = decoration
                        if (item.name === 'underline') {
                            textDecoration =
                                decoration === item.name ? '' : item.name
                        } else if (item.name === 'bold') {
                            fontStyle =
                                style === item.name
                                    ? 'normal'
                                    : style === 'italic bold'
                                    ? 'italic'
                                    : style === 'italic'
                                    ? 'italic bold'
                                    : 'bold'
                        } else if (item.name === 'italic') {
                            fontStyle =
                                style === item.name
                                    ? 'normal'
                                    : style === 'italic bold'
                                    ? 'bold'
                                    : style === 'bold'
                                    ? 'italic bold'
                                    : 'italic'
                        }
                        setfont((prev) => ({
                            ...prev,
                            fontStyle: fontStyle,
                            textDecoration: textDecoration,
                        }))
                    }}
                />
            ))}
        </div>
    )
}
