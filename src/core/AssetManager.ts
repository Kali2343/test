export default abstract class AssetManager<
  Asset,
  Sources extends Record<string, string>
> {
  protected assets: Record<string, Asset> = {}

  protected abstract mapper(key: keyof Sources, src: string): Promise<Asset>

  public constructor(protected readonly sources: Sources) {}

  public async load() {
    for (const key in this.sources) {
      const src = this.sources[key]

      try {
        this.assets[key] = await this.mapper(key, src)
      } catch (err) {
        console.error(`"${src}" is not accessible on load`)
      }
    }
  }

  public get(key: keyof Sources & string): Asset {
    return this.assets[key]
  }
}
