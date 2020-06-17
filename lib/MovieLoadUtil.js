"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAutoPlayableMovie = void 0;
/**
 * PixiJSのTextureとして扱える、autoplay可能なVideoElementを取得する。
 * VideoElementには、iOSおよびChromeのautoplayポリシーを回避するための設定がされている。
 *
 * @param url アセットのURL
 */
function loadAutoPlayableMovie(url) {
    var video = document.createElement("video");
    video.src = url;
    video.muted = true;
    video.setAttribute("playsinline", "");
    return video;
}
exports.loadAutoPlayableMovie = loadAutoPlayableMovie;
