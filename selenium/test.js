const { Builder, Capabilities, logging } = require("selenium-webdriver");

const pref = new logging.Preferences();
pref.setLevel(logging.Type.BROWSER, logging.Level.DEBUG);

const testImageLoad = async (driver) => {
  try {
    await driver.get(
      "https://masatomakino.github.io/pixijs-loader-util/demo/demo_fetchImage.html"
    );
    await onLoadedImageTest(driver);

    await driver.navigate().to("https://www.google.com/");

    await driver.navigate().back();
    await onLoadedImageTest(driver);
  } catch (e) {
    console.log(e);
  } finally {
    // Chromeを終了
    driver && (await driver.quit());
  }
};

const onLoadedImageTest = async (driver) => {
  driver.wait(driver.executeScript("return window.onFetch"), 10000);
  const posX = await driver.executeScript("return window.posX");
  const posY = await driver.executeScript("return window.posY");
  if (posX !== 325 || posY !== 225) {
    console.warn(posX, posY);
  }
};

const outputLog = async (driver) => {
  const entries = await driver.manage().logs().get(logging.Type.BROWSER);
  entries.forEach((entry) => {
    console.log("[%s] %s", entry.level.name, entry.message);
  });
};

const testWithBrowserCapabilities = (capabilities) => {
  capabilities.setLoggingPrefs(pref);
  const driver = new Builder().withCapabilities(capabilities).build();
  testImageLoad(driver);
};
testWithBrowserCapabilities(Capabilities.chrome());
testWithBrowserCapabilities(Capabilities.safari());
testWithBrowserCapabilities(Capabilities.firefox());
