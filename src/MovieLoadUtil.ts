/**
 * PixiJSのTextureとして扱える、autoplay可能なVideoElementを取得する。
 * VideoElementには、iOSおよびChromeのautoplayポリシーを回避するための設定がされている。
 *
 * @param url アセットのURL
 */
export function loadAutoPlayableMovie(url: string): HTMLVideoElement {
  const video = document.createElement("video");
  video.src = url;
  video.muted = true;
  video.setAttribute("playsinline", "");
  return video;
}
