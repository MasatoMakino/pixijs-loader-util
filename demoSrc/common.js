import { Application } from "pixi.js";

export async function initApp(w = 800, h = 600) {
  const app = new Application();
  await app.init({ width: w, height: h });
  document.body.appendChild(app.canvas);

  return app;
}

export function initLink() {
  const link = document.createElement("a");
  link.href = "https://google.com";
  link.innerHTML = "jump to google";

  const div = document.createElement("div");
  div.appendChild(link);
  document.body.appendChild(div);
}
