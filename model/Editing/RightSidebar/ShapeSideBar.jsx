import Items from './Items'
import LayoutHorizontalAlignment from './Items/Alignment/LayoutHorizontalAlignment'
import LayoutVerticalAlignment from './Items/Alignment/LayoutVerticalAlignment'
import Border from './Items/Border'
import BackgroundFill from './Items/Fill/BackgroundFill'

export default function ShapeSidebar() {
    return (
        <div className="flex h-full w-full  flex-col space-y-4 ">
            <h4 className="px-6 text-white">Settings</h4>
            <Items>
                <Items.Group>
                    <LayoutVerticalAlignment />
                    <LayoutHorizontalAlignment />
                </Items.Group>
                <Items.Group>
                    <BackgroundFill />
                </Items.Group>
                <Items.Group>
                    <Border />
                </Items.Group>
            </Items>
        </div>
    )
}
