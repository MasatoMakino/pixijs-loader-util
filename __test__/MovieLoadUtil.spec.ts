import { loadAutoPlayableMovie } from "../src/MovieLoadUtil";
import { describe, test, expect } from "vitest";

describe("MovieLoadUtil", () => {
  test("Load movie", () => {
    const video = loadAutoPlayableMovie(
      "demoSrc/severe-storm-over-mandurah.mp4"
    );
    expect(video).toBeTruthy();
  });
});
