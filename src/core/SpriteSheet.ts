import { ctx } from "./HTML"

export interface SpriteSheetOptions {
  rows: number
  columns: number
}

export default class SpriteSheet {
  public frame = 0
  public play = false
  public once = false
  public width: number
  public height: number

  public onStop?: () => unknown

  constructor(
    public readonly data: SpriteSheetOptions,
    public readonly sheet: HTMLImageElement
  ) {
    this.width = sheet.naturalWidth / data.columns
    this.height = sheet.naturalHeight / data.rows
  }

  draw() {
    if (this.play && this.frame > this.data.columns * this.data.rows) {
      this.frame = 0
      if (this.once) {
        this.play = false
        this.onStop?.()
        return
      }
    }

    const column = this.frame % this.data.columns
    const row = Math.floor(this.frame / this.data.columns)
    const width = this.sheet.naturalWidth / this.data.columns
    const height = this.sheet.naturalHeight / this.data.rows

    ctx.drawImage(
      this.sheet,
      column * width,
      row * height,
      width,
      height,
      this.width,
      this.height,
      width,
      height
    )

    if (this.play) this.frame++
  }
}
