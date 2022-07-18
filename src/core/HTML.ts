export const assets = document.getElementById("assets") as HTMLDivElement
export const canvas = document.getElementById("canvas") as HTMLCanvasElement

if (!assets || !canvas)
  throw new Error("Some elements are missing in index.html file!")

export const ctx = (canvas.getContext("webgl2") ??
  canvas.getContext("2d")) as CanvasRenderingContext2D

if (!ctx) throw new Error("Canvas context not works!")
