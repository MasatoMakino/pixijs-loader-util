import { Sprite } from "pixi.js";
/**
 * Sprite.from("img")で生成されたSpriteの、画像ロード後の処理を指定する。
 * テクスチャバッファに保存されているか否かにかかわらず、実行されることを保証する。
 *
 * @param sprite
 */
export declare function fetchImage(sprite: Sprite): Promise<Sprite>;
//# sourceMappingURL=ImageLoadUtil.d.ts.map