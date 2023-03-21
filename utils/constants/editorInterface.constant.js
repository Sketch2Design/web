import { BiRectangle } from 'react-icons/bi'
import { FiTriangle } from 'react-icons/fi'
import { FaRegCircle } from 'react-icons/fa'
import {
    AiOutlineAlignCenter,
    AiOutlineAlignLeft,
    AiOutlineAlignRight,
    AiOutlineVerticalAlignBottom,
    AiOutlineVerticalAlignMiddle,
    AiOutlineVerticalAlignTop,
} from 'react-icons/ai'
import {
    MdOutlineAlignHorizontalCenter,
    MdOutlineAlignHorizontalLeft,
    MdOutlineAlignHorizontalRight,
    MdOutlineAlignVerticalTop,
    MdOutlineAlignVerticalBottom,
    MdOutlineAlignVerticalCenter,
    MdFormatItalic,
    MdFormatBold,
    MdFormatUnderlined,
} from 'react-icons/md'

// ------------------------------------------- Elements ------------------------------------------------
export const SHAPES = {
    RECTANGLE: 'Rectangle',
    CIRCLE: 'Circle',
    ELLIPSE: 'Ellipse',
    POLYGON: 'Polygon',
}

// ------------------------------------------- Topbar -----------------------------------------------------
export const TOPBAR_ITMES = {
    SHAPES: [
        {
            id: 0,
            name: SHAPES.RECTANGLE,
            icon: <BiRectangle className="edit_topbar_icon_mini" />,
        },
        {
            id: 0,
            name: SHAPES.ELLIPSE,
            icon: <FaRegCircle className="edit_topbar_icon_mini" />,
        },
        {
            id: 0,
            name: SHAPES.POLYGON,
            icon: <FiTriangle className="edit_topbar_icon_mini" />,
        },
    ],
}

//-------------------------------------------------------------- Sidebar -------------------------------------------------------------
export const SIDEBAR_ITMES = {
    TEXT_ALIGNMENT: {
        HORIZONTAL: [
            {
                name: 'left',
                icon: <AiOutlineAlignLeft className="edit_topbar_icon_mini" />,
            },
            {
                name: 'center',
                icon: (
                    <AiOutlineAlignCenter className="edit_topbar_icon_mini" />
                ),
            },
            {
                name: 'right',
                icon: <AiOutlineAlignRight className="edit_topbar_icon_mini" />,
            },
        ],
        VERTICAL: [
            {
                name: 'top',
                icon: (
                    <AiOutlineVerticalAlignTop className="edit_topbar_icon_mini" />
                ),
            },
            {
                name: 'middle',
                icon: (
                    <AiOutlineVerticalAlignMiddle className="edit_topbar_icon_mini" />
                ),
            },
            {
                name: 'bottom',
                icon: (
                    <AiOutlineVerticalAlignBottom className="edit_topbar_icon_mini" />
                ),
            },
        ],
    },
    LAYOUT_ALIGNMENT: {
        HORIZONTAL: [
            {
                name: 'left',
                icon: (
                    <MdOutlineAlignHorizontalLeft className="edit_topbar_icon_mini" />
                ),
            },
            {
                name: 'center',
                icon: (
                    <MdOutlineAlignHorizontalCenter className="edit_topbar_icon_mini" />
                ),
            },
            {
                name: 'right',
                icon: (
                    <MdOutlineAlignHorizontalRight className="edit_topbar_icon_mini" />
                ),
            },
        ],
        VERTICAL: [
            {
                name: 'top',
                icon: (
                    <MdOutlineAlignVerticalTop className="edit_topbar_icon_mini" />
                ),
            },
            {
                name: 'middle',
                icon: (
                    <MdOutlineAlignVerticalCenter className="edit_topbar_icon_mini" />
                ),
            },
            {
                name: 'bottom',
                icon: (
                    <MdOutlineAlignVerticalBottom className="edit_topbar_icon_mini" />
                ),
            },
        ],
    },
}

export const FONT_FORMAT_ITEMS = [
    {
        name: 'bold',
        icon: <MdFormatBold className="edit_topbar_icon_nano" />,
    },
    {
        name: 'underline',
        icon: <MdFormatUnderlined className="edit_topbar_icon_nano" />,
    },
    {
        name: 'italic',
        icon: <MdFormatItalic className="edit_topbar_icon_nano" />,
    },
]
