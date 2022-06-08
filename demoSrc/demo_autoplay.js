import { Sprite } from "pixi.js";
import { initApp } from "./common";
import { loadAutoPlayableMovie } from "..";

const onDomContentsLoaded = () => {
  const W = 800;
  const H = 600;
  const app = initApp(W, H);

  const video = loadAutoPlayableMovie("severe-storm-over-mandurah.mp4");
  const sprite = Sprite.from(video);
  sprite.scale.set(W / 1080);
  app.stage.addChild(sprite);

  const p = document.createElement("p");
  p.innerHTML = `
Severe storm over Mandurah by Grahame Kelaher<br>
LICENSE : <a href="https://creativecommons.org/licenses/by/3.0/">CC-BY 3.0</a><br>
<a href='https://mazwai.com/video/severe-storm-over-mandurah/455100'>https://mazwai.com/video/severe-storm-over-mandurah/455100</a>
`;
  document.body.appendChild(p);
};

if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
