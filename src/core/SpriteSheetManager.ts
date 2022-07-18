import SpriteSheet, { SpriteSheetOptions } from "./SpriteSheet"
import AssetManager from "./AssetManager"

import { assets } from "./HTML"

export default class SpriteSheetManager<
  Sources extends Record<string, `${string}.json`>
> extends AssetManager<SpriteSheet, Sources> {
  protected async mapper(
    key: keyof Sources,
    src: string
  ): Promise<SpriteSheet> {
    const dataSrc = src
    const sheetSrc = src.replace(".json", ".png")

    const data: SpriteSheetOptions = await fetch(dataSrc, {
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    }).then((res) => res.json())

    return new Promise((resolve) => {
      const sheet = new Image()

      sheet.src = sheetSrc
      sheet.onload = () => resolve(new SpriteSheet(data, sheet))

      assets.appendChild(sheet)
    })
  }
}
