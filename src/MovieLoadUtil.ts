/**
 * PixiJSのTextureとして扱える、autoplay可能なVideoElementを取得する。
 * VideoElementには、iOSおよびChromeのautoplayポリシーを回避するための設定がされている。
 * また、メタデータが不明の場合レンダリングが失敗するため、再生可能イベントを待ってからresolveする。
 *
 * @param url アセットのURL
 */
export async function loadAutoPlayableMovie(
  url: string,
): Promise<HTMLVideoElement> {
  const video = document.createElement("video");
  video.src = url;
  video.muted = true;
  video.autoplay = true;
  video.setAttribute("playsinline", "");

  return new Promise((resolve, reject) => {
    video.addEventListener("canplay", () => {
      resolve(video);
    });
  });
}
