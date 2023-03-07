import { useBorder } from '@/utils/hooks/Editing/useBorder'

import BorderFill from '../Fill/BorderFill'
import BorderStyle from './BorderStyle'

export default function Border() {
    const [border, setborder] = useBorder()

    return (
        <div className="flex flex-col space-y-4">
            <BorderStyle setborder={setborder} width={border?.width} />
            {border?.width !== 0 && (
                <BorderFill color={border?.color} setborder={setborder} />
            )}
        </div>
    )
}
