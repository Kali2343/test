import { ctx, canvas } from "./HTML"

export default class DrawTools {
  get height() {
    return canvas.height
  }

  get width() {
    return canvas.width
  }

  clear() {
    ctx.clearRect(0, 0, this.width, this.height)
  }
}
