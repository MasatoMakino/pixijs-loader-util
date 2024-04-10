import { describe, test, expect } from "vitest";
import { Assets, Sprite } from "pixi.js";
import { TestImage } from "./TestImage.js";

describe("ImageLoadUtil", () => {
  test("Load image", async () => {
    const textures = await Assets.load(TestImage);
    const sprite = Sprite.from(textures);
    expect(sprite.width).toBe(8);
  }, 500);
});
