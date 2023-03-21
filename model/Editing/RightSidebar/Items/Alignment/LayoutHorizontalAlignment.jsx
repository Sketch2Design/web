import { SIDEBAR_ITMES } from '@/utils/constants/editorInterface.constant'
import { useShapeAlignment } from '@/utils/hooks/Editing/useShapeAlignment'

import Icon from '@/components/Button/Icon'

export default function LayoutHorizontalAlignment({ icons }) {
    const [current, setcurrent] = useShapeAlignment('horizontal')

    return (
        <div className="flex items-center justify-center space-x-6">
            {SIDEBAR_ITMES.LAYOUT_ALIGNMENT.HORIZONTAL.map((item) => (
                <Icon
                    key={item.name}
                    icon={item.icon}
                    name={item.name}
                    current={current}
                    handleSelect={(selected) => {
                        setcurrent(selected)
                    }}
                />
            ))}
        </div>
    )
}
