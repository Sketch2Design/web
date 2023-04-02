import { SIDEBAR_ITMES } from '@/utils/constants/editorInterface.constant'
import { useShapeAlignment } from '@/utils/hooks/Editing/useShapeAlignment'
import Icon from '@/components/Button/Icon'

export default function LayoutVerticalAlignment() {
    const [current, setcurrent] = useShapeAlignment('vertical')

    return (
        <div className="flex items-center justify-center space-x-6">
            {SIDEBAR_ITMES.LAYOUT_ALIGNMENT.VERTICAL.map((item) => (
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
