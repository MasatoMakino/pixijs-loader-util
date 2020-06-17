/**
 * Sprite.from("img")で生成されたSpriteの、画像ロード後の処理を指定する。
 * テクスチャバッファに保存されているか否かにかかわらず、実行されることを保証する。
 *
 * @param sprite
 */
export function fetchImage(sprite) {
    return new Promise((resolve, reject) => {
        if (sprite.texture.baseTexture.width !== 0) {
            resolve(sprite);
        }
        else {
            sprite.texture.baseTexture.once("loaded", () => {
                resolve(sprite);
            });
        }
    });
}
