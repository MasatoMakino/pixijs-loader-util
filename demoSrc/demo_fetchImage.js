import { Sprite, Assets, Texture } from "pixi.js";
import { initApp, initLink } from "./common.js";
import { fetchImage } from "../esm/index.js";

// window.onFetch = false;
window.posX = 0;
window.posY = 0;

const onDomContentsLoaded = async () => {
  const W = 800;
  const H = 600;
  const app = await initApp(W, H);

  const filePath = "./150.png";
  await Assets.load(filePath);
  const img = Sprite.from(filePath);
  app.stage.addChild(img);

  img.x = window.posX = W / 2 - img.width / 2;
  img.y = window.posY = H / 2 - img.height / 2;

  initLink();
};

if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
