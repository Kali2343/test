import AssetManager from "./AssetManager"
import Sprite from "./Sprite"

import { assets } from "./HTML"

export default class SpriteManager<
  Sources extends Record<string, `${string}.png`>
> extends AssetManager<Sprite, Sources> {
  protected mapper(key: keyof Sources, src: string): Promise<Sprite> {
    return new Promise((resolve) => {
      const img = new Image()

      img.src = src
      img.onload = () => resolve(new Sprite(img))

      assets.appendChild(img)
    })
  }
}
