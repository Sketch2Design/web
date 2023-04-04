export function getCurrentElement(canvasItems, id) {
    if (!id) {
        return null
    }
    const current = canvasItems.filter((item) => item.id == id)
    return current[0]
}

export function findTextScale(node) {
    const scaleX = node.scaleX()
    const scaleY = node.scaleY()
    node.scaleX(1)
    node.scaleY(1)

    const width = Math.max(5, parseInt(node.width() * scaleX))
    let height = Math.max(5, parseInt(node.height() * scaleY))

    const lines = node.text().split('\n').length
    const fontSize = parseInt(height / lines)

    height = height * node.lineHeight()

    return { width, height, fontSize }
}


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
