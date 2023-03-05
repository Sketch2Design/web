import { SIDEBAR_ITMES } from '@/utils/constants/editorInterface.constant'

import Items from './Items'
import LayoutHorizontalAlignment from './Items/Alignment/LayoutHorizontalAlignment'
import LayoutVerticalAlignment from './Items/Alignment/LayoutVerticalAlignment'
import LayoutAlignment from './Items/Alignment/LayoutVerticalAlignment'

export default function ShapeSidebar() {
    return (
        <div className="flex min-h-full w-full flex-col space-y-4 rounded-xl bg-zinc-800 p-4 ">
            <h4>Settings</h4>
            <Items>
                <Items.Group>
                    <LayoutVerticalAlignment />
                    <LayoutHorizontalAlignment />
                </Items.Group>
            </Items>
        </div>
    )
}
