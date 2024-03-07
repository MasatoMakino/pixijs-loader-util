import { describe, test, expect } from "vitest";
import { Assets, Sprite } from "pixi.js";
import { TestImage } from "./TestImage.js";

describe("ImageLoadUtil", () => {
  test("Load image", async () => {
    await Assets.load(TestImage);
    const sprite = Sprite.from(TestImage);
    expect(sprite.width).toBe(8);
  }, 500);
});
