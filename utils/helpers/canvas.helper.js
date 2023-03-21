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
