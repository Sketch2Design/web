import { SIDEBAR_ITMES } from '@/utils/constants/editorInterface.constant'

import Items from './Items'
import Dropdown from './Items/Dropdown'
import IconSelect from './Items/IconSelect'
import IncreaseDecrease from './Items/IncreaseDecrease'

export default function TextSidebar() {
    return (
        <div className="flex flex-col w-3/12 bg-zinc-800 min-h-full rounded-xl p-4 space-y-4">
            <h4>Text Settings</h4>
            <Items>
                <Items.Group>
                    <Dropdown name="Font" />
                    <Dropdown name="Style" />
                    <IncreaseDecrease name="Size" />
                </Items.Group>
                <Items.Group>
                    <IconSelect
                        name="Horizontal"
                        icons={SIDEBAR_ITMES.TEXT_ALIGNMENT.HORIZONTAL}
                    />
                    <IconSelect
                        name="Horizontal"
                        icons={SIDEBAR_ITMES.TEXT_ALIGNMENT.VERTICAL}
                    />
                </Items.Group>
            </Items>
        </div>
    )
}
