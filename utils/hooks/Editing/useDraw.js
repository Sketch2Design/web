import { useEffect } from "react";

import { useCanvasContext } from "@/store/context/providers/CanvasProvider";
import { useElementContext } from "@/store/context/providers/ElementProvider";
import { ACTIONS } from "@/store/reducer/elementReducer";

import useMouseMove from "./useMouseMove";
import drawShape from "@/utils/helpers/editor/draw/shapes";


export default function useDraw(ref){

    const [start, end] = useMouseMove(ref)

    const { canvasItems, canvasItemsDispatch } = useCanvasContext()
    const { element, elementDispatch } = useElementContext()

    useEffect(() => {
        if(element?.id !== null && (start !== null && end !== null) && start.x !== end.x){
            drawShape(ref, element, canvasItemsDispatch, start, end)
        }else if(start?.x == end?.x){
            elementDispatch({type: ACTIONS.RESET})
            canvasItemsDispatch()
        }
    }, [end])

    console.log(canvasItems);
    console.log(start, end);
    

}