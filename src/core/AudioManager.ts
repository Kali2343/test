import * as howler from "howler"
import AssetManager from "./AssetManager"

export default class AudioManager<
  Sources extends Record<string, `${string}.mp3`>
> extends AssetManager<howler.Howl, Sources> {
  protected mapper(key: keyof Sources, src: string): Promise<howler.Howl> {
    return Promise.resolve(new howler.Howl({ src }))
  }

  play(key: keyof Sources & string) {
    this.get(key).play()
  }
}
