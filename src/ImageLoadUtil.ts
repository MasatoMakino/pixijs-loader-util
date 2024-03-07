import { Sprite } from "pixi.js";

/**
 * Sprite.from("img")で生成されたSpriteの、画像ロード後の処理を指定する。
 * テクスチャバッファに保存されているか否かにかかわらず、実行されることを保証する。
 *
 * @param sprite
 * @deprecated
 *   この関数は非推奨です。
 *   Pixi.js v8では、Sprite.from("img")ではファイルの実体はロードされず、Assetsから読み込まれます。
 *   await Assets.load("img")を使うことで、ロード済みであることが保証されます。
 */
export function fetchImage(sprite: Sprite): Promise<Sprite | Error> {
  return new Promise((resolve, reject) => {
    resolve(sprite);
  });
}
