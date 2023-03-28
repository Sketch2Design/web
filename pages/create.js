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
        img2.height = 480

        // const hi = document.getElementById('hi')
        // hi.appendChild(img2)

        const img = tf.browser.fromPixels(img2)
        const resized = tf.image.resizeBilinear(img, [640, 480])
        const casted = resized.cast('int32')
        const expanded = casted.expandDims(0)
        const obj = await net.executeAsync(expanded)

        console.log(net.outputNodes)

        const boxes = await obj[0].arraySync()
        const classes = await obj[1].array()
        const scores = await obj[3].array()

        console.log(
            obj[0].arraySync(),
            '-',
            obj[1].arraySync(),
            '-',
            obj[2].arraySync(),
            '-',
            obj[3].arraySync(),
            '-',
            obj[4].arraySync(),
            '-',
            obj[5].arraySync(),
            '-',
            obj[6].arraySync(),
            '-',
            obj[7].arraySync()
        )
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
        <div className="min-h-screen" id="hi">
            <input
                ref={ref}
                type="file"
                className="h-12 w-96 bg-zinc-800"
                onChange={detect}
            />
        </div>
    )
}
