import { useRef, useState } from 'react'
import * as tf from '@tensorflow/tfjs'

export default function CreatePage() {
    const ref = useRef(null)

    async function detect() {
        const net = await tf.loadGraphModel(
            'https://jklozawylzpkjhwyvdlc.supabase.co/storage/v1/object/public/model/model.json'
        )

        const getImagePath = URL.createObjectURL(ref.current.files[0])
        const img2 = document.createElement('img') // Use DOM HTMLImageElement
        img2.src = getImagePath
        img2.width = 640
        img2.height = 640

        const img = tf.browser.fromPixels(img2)
        const resized = tf.image.resizeBilinear(img, [640, 640])
        const casted = resized.cast('int32')
        const expanded = casted.expandDims(0)
        const obj = await net.executeAsync(expanded)

        const boxes = await obj[0].arraySync()
        const classes = await obj[1].arraySync()
        const scores = await obj[3].arraySync()

        console.log(boxes[0], '-', classes[0], '-', scores[0])
        // for (let i = 0; i <= box.length; i++) {
        //     const [y, x, height, width] = box[i]
        //     console.log(y, x, height, width)
        // }

        tf.dispose(img)
        tf.dispose(resized)
        tf.dispose(casted)
        tf.dispose(expanded)
        tf.dispose(obj)
    }

    return (
        <div className=" mx-52 flex  min-h-screen flex-row items-center justify-center rounded-xl py-5">
            <input
                ref={ref}
                type="file"
                className="h-12 w-96 bg-zinc-800"
                onChange={detect}
            />
            <div className="flex h-96 w-3/5 flex-row justify-between rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 py-8 pr-1 ">
                <div className="flex flex-col px-8 font-bold text-black">
                    <p className="text-lg font-bold">Create a new template </p>
                    <p>Name</p>
                    <input type="text" placeholder="Project Name"></input>

                    <label htmlFor="template">Template:</label>
                    <select id="template" name="template">
                        <option value="A4">A4</option>
                        <option value="A3">A3</option>
                        <option value="Instagram">Instagram</option>
                    </select>

                    <p>Image Size</p>
                    <br></br>
                    <p>
                        Width: <input type="number" id="width" />{' '}
                    </p>
                    <br></br>
                    <p>
                        Height: <input type="number" id="height" />{' '}
                    </p>
                </div>
                <div className="mr-9 flex w-full flex-col items-center justify-center">
                    <div className="h-44 w-full bg-white"></div>
                    <button className="w-full border bg-black">Upload</button>
                    <br></br>
                    <div className=" flex w-full justify-end">
                        <button className="w-16 rounded-xl border bg-black  ">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
