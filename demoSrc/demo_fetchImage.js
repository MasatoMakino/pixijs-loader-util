import { Sprite } from "pixi.js";
import { initApp, initLink } from "./common.js";
import { fetchImage } from "../esm/index.js";

window.onFetch = false;
window.posX = 0;
window.posY = 0;

const onDomContentsLoaded = () => {
  const W = 800;
  const H = 600;
  const app = initApp(W, H);

  const img = Sprite.from("./150.png");
  app.stage.addChild(img);

  fetchImage(img).then((sprite) => {
    const baseTexture = sprite.texture.baseTexture;
    sprite.x = window.posX = W / 2 - baseTexture.width / 2;
    sprite.y = window.posY = H / 2 - baseTexture.height / 2;
    window.onFetch = true;
  });

  initLink();
};

if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
