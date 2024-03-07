import { loadAutoPlayableMovie } from "../src/MovieLoadUtil.js";
import { describe, test, expect } from "vitest";

describe("MovieLoadUtil", () => {
  test("Load movie", async () => {
    const video = loadAutoPlayableMovie(
      "demoSrc/severe-storm-over-mandurah.mp4",
    );
    expect(video).toBeTruthy();
  });
});
