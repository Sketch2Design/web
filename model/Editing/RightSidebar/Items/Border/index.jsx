import { useBorder } from '@/utils/hooks/Editing/useBorder'
import { useCanvasContext } from '@/store/context/providers/CanvasProvider'

import BorderFill from '../Fill/BorderFill'
import BorderStyle from './BorderStyle'
import BorderRadius from './BorderRadius'

export default function Border() {
    const [border, setborder] = useBorder()

    const { currentElement } = useCanvasContext()

    return (
        <div className="flex flex-col space-y-4">
            {currentElement?.values?.type !== 'Ellipse' && (
                <BorderRadius setborder={setborder} radius={border?.radius} />
            )}
            <BorderStyle setborder={setborder} width={border?.width} />
            {border?.width !== 0 && (
                <BorderFill color={border?.color} setborder={setborder} />
            )}
        </div>
    )
}
