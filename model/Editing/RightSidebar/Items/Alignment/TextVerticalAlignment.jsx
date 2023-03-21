import { SIDEBAR_ITMES } from '@/utils/constants/editorInterface.constant'
import { useShapeAlignment } from '@/utils/hooks/Editing/useShapeAlignment'
import IconSelect from '../IconSelect'

export default function TextVerticalAlignment() {
    const [current, setcurrent] = useShapeAlignment('vertical')

    return (
        <div className="flex items-center justify-center space-x-6">
            {SIDEBAR_ITMES.LAYOUT_ALIGNMENT.VERTICAL.map((item) => (
                <IconSelect
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
