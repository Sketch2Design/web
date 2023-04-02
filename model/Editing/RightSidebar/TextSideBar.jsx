import Items from './Items'
import LayoutHorizontalAlignment from './Items/Alignment/LayoutHorizontalAlignment'
import LayoutVerticalAlignment from './Items/Alignment/LayoutVerticalAlignment'
import TextFill from './Items/Fill/TextFill'
import Font from './Items/Text/Font'
import Format from './Items/Text/Format'
import Spacing from './Items/Text/Spacing'
import TextContent from './Items/Text/Content/TextContent'

export default function TextSidebar() {
    return (
        <div className="flex h-full w-full  flex-col space-y-4 ">
            <h4 className="px-6 text-white">Settings</h4>
            <Items>
                <Items.Group>
                    <LayoutVerticalAlignment />
                    <LayoutHorizontalAlignment />
                </Items.Group>
                <Items.Group>
                    <TextContent />
                </Items.Group>
                <Items.Group>
                    <Font />
                </Items.Group>
                <Items.Group>
                    <Format />
                </Items.Group>
                <Items.Group>
                    <TextFill />
                </Items.Group>
                <Items.Group>
                    <Spacing />
                </Items.Group>
            </Items>
        </div>
    )
}
