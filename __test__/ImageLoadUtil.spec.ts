import { fetchImage } from "../src/ImageLoadUtil";
import { describe, test, expect } from "vitest";
import { Sprite } from "pixi.js";
import { TestImage } from "./TestImage";

describe("ImageLoadUtil", () => {
  const onLoadImage = async (sprite: Sprite): Promise<void> => {
    await new Promise<void>((resolve) => {
      sprite.texture.baseTexture.once("loaded", () => {
        expect(sprite.texture.baseTexture.width).not.toBe(0);
        resolve();
      });
    });
  };

  test("Load image", async () => {
    const sprite = Sprite.from(TestImage);
    expect(sprite.texture.baseTexture.width).toBe(0);

    const promise = fetchImage(sprite);
    await onLoadImage(sprite);
    const loadedImage = await promise;
    expect(loadedImage.texture.baseTexture.width).not.toBe(0);
  });

  test("Image loading sets texture size after the first load", async () => {
    const sprite = Sprite.from(TestImage);
    expect(sprite.texture.baseTexture.width).not.toBe(0);
  });

  test.fails(
    "Repeated image loading does not call loaded callback",
    async () => {
      const sprite = Sprite.from(TestImage);
      await onLoadImage(sprite);
    },
    1000
  );

  test("Ensures load completion even for cached images", async () => {
    const sprite = Sprite.from(TestImage);

    const loadedImage = await fetchImage(sprite);
    expect(loadedImage.texture.baseTexture.width).not.toBe(0);
  });
});
