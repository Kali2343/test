import AudioManager from "../core/AudioManager"
import SpriteManager from "../core/SpriteManager"
import GameLoopManager from "../core/GameLoopManager"
import SpriteSheetManager from "../core/SpriteSheetManager"
import DrawTools from "../core/DrawTools"

export const loop = new GameLoopManager()

export const drawing = new DrawTools()

export const audios = new AudioManager({})

export const sprites = new SpriteManager({})

export const spriteSheets = new SpriteSheetManager({})

loop.wait(async () => {
  await audios.load()
  await sprites.load()
  await spriteSheets.load()
})
