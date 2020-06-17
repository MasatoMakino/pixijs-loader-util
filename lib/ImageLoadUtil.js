"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchImage = void 0;
/**
 * Sprite.from("img")で生成されたSpriteの、画像ロード後の処理を指定する。
 * テクスチャバッファに保存されているか否かにかかわらず、実行されることを保証する。
 *
 * @param sprite
 */
function fetchImage(sprite) {
    return new Promise(function (resolve, reject) {
        if (sprite.texture.baseTexture.width !== 0) {
            resolve(sprite);
        }
        else {
            sprite.texture.baseTexture.once("loaded", function () {
                resolve(sprite);
            });
        }
    });
}
exports.fetchImage = fetchImage;
