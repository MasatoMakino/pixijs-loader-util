(()=>{"use strict";var __webpack_modules__={760:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// EXTERNAL MODULE: ./node_modules/pixi.js/lib/index.mjs + 340 modules\nvar lib = __webpack_require__(675);\n;// CONCATENATED MODULE: ./demoSrc/common.js\n\nfunction initApp(w = 800, h = 600) {\n  const app = new lib/* Application */.MxU({\n    width: w,\n    height: h\n  });\n  document.body.appendChild(app.view);\n  return app;\n}\nfunction initLink() {\n  const link = document.createElement("a");\n  link.href = "https://google.com";\n  link.innerHTML = "jump to google";\n  const div = document.createElement("div");\n  div.appendChild(link);\n  document.body.appendChild(div);\n}\n;// CONCATENATED MODULE: ./esm/MovieLoadUtil.js\n/**\n * PixiJSのTextureとして扱える、autoplay可能なVideoElementを取得する。\n * VideoElementには、iOSおよびChromeのautoplayポリシーを回避するための設定がされている。\n *\n * @param url アセットのURL\n */\nfunction loadAutoPlayableMovie(url) {\n  const video = document.createElement("video");\n  video.src = url;\n  video.muted = true;\n  video.setAttribute("playsinline", "");\n  return video;\n}\n;// CONCATENATED MODULE: ./demoSrc/demo_autoplay.js\n\n\n\nconst onDomContentsLoaded = () => {\n  const W = 800;\n  const H = 600;\n  const app = initApp(W, H);\n  const video = loadAutoPlayableMovie("severe-storm-over-mandurah.mp4");\n  const sprite = lib/* Sprite.from */.jyi.from(video);\n  sprite.scale.set(W / 1080);\n  app.stage.addChild(sprite);\n  const p = document.createElement("p");\n  p.innerHTML = `\nSevere storm over Mandurah by Grahame Kelaher<br>\nLICENSE : <a href="https://creativecommons.org/licenses/by/3.0/">CC-BY 3.0</a><br>\n<a href=\'https://mazwai.com/video/severe-storm-over-mandurah/455100\'>https://mazwai.com/video/severe-storm-over-mandurah/455100</a>\n`;\n  document.body.appendChild(p);\n};\nif (document.readyState !== "loading") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzYwLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBc0M7QUFFL0IsU0FBU0MsT0FBT0EsQ0FBQ0MsQ0FBQyxHQUFHLEdBQUcsRUFBRUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtFQUN4QyxNQUFNQyxHQUFHLEdBQUcsSUFBSUosd0JBQVcsQ0FBQztJQUFFSyxLQUFLLEVBQUVILENBQUM7SUFBRUksTUFBTSxFQUFFSDtFQUFFLENBQUMsQ0FBQztFQUNwREksUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsR0FBRyxDQUFDTSxJQUFJLENBQUM7RUFDbkMsT0FBT04sR0FBRztBQUNaO0FBRU8sU0FBU08sUUFBUUEsQ0FBQSxFQUFHO0VBQ3pCLE1BQU1DLElBQUksR0FBR0wsUUFBUSxDQUFDTSxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3hDRCxJQUFJLENBQUNFLElBQUksR0FBRyxvQkFBb0I7RUFDaENGLElBQUksQ0FBQ0csU0FBUyxHQUFHLGdCQUFnQjtFQUVqQyxNQUFNQyxHQUFHLEdBQUdULFFBQVEsQ0FBQ00sYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN6Q0csR0FBRyxDQUFDUCxXQUFXLENBQUNHLElBQUksQ0FBQztFQUNyQkwsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ08sR0FBRyxDQUFDO0FBQ2hDLEM7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLHFCQUFxQkEsQ0FBQ0MsR0FBRyxFQUFFO0VBQ3ZDLE1BQU1DLEtBQUssR0FBR1osUUFBUSxDQUFDTSxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzdDTSxLQUFLLENBQUNDLEdBQUcsR0FBR0YsR0FBRztFQUNmQyxLQUFLLENBQUNFLEtBQUssR0FBRyxJQUFJO0VBQ2xCRixLQUFLLENBQUNHLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO0VBQ3JDLE9BQU9ILEtBQUs7QUFDaEIsQzs7QUNaaUM7QUFDRTtBQUNRO0FBRTNDLE1BQU1LLG1CQUFtQixHQUFHQSxDQUFBLEtBQU07RUFDaEMsTUFBTUMsQ0FBQyxHQUFHLEdBQUc7RUFDYixNQUFNQyxDQUFDLEdBQUcsR0FBRztFQUNiLE1BQU10QixHQUFHLEdBQUdILE9BQU8sQ0FBQ3dCLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBRXpCLE1BQU1QLEtBQUssR0FBR0YscUJBQXFCLENBQUMsZ0NBQWdDLENBQUM7RUFDckUsTUFBTVUsTUFBTSxHQUFHSiw2QkFBVyxDQUFDSixLQUFLLENBQUM7RUFDakNRLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxHQUFHLENBQUNMLENBQUMsR0FBRyxJQUFJLENBQUM7RUFDMUJyQixHQUFHLENBQUMyQixLQUFLLENBQUNDLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDO0VBRTFCLE1BQU1NLENBQUMsR0FBRzFCLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNyQ29CLENBQUMsQ0FBQ2xCLFNBQVMsR0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0VBQ0NSLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUN3QixDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVELElBQUkxQixRQUFRLENBQUMyQixVQUFVLEtBQUssU0FBUyxFQUFFO0VBQ3JDVixtQkFBbUIsRUFBRTtBQUN2QixDQUFDLE1BQU07RUFDTGpCLFFBQVEsQ0FBQzRCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFWCxtQkFBbUIsQ0FBQztBQUNwRSIsInNvdXJjZXMiOlsid2VicGFjazovL0BtYXNhdG9tYWtpbm8vcGl4aWpzLWxvYWRlci11dGlsLy4vZGVtb1NyYy9jb21tb24uanM/NDA2ZiIsIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3BpeGlqcy1sb2FkZXItdXRpbC8uL2VzbS9Nb3ZpZUxvYWRVdGlsLmpzP2Y0OGYiLCJ3ZWJwYWNrOi8vQG1hc2F0b21ha2luby9waXhpanMtbG9hZGVyLXV0aWwvLi9kZW1vU3JjL2RlbW9fYXV0b3BsYXkuanM/NmE0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gXCJwaXhpLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QXBwKHcgPSA4MDAsIGggPSA2MDApIHtcbiAgY29uc3QgYXBwID0gbmV3IEFwcGxpY2F0aW9uKHsgd2lkdGg6IHcsIGhlaWdodDogaCB9KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XG4gIHJldHVybiBhcHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TGluaygpIHtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLmhyZWYgPSBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiO1xuICBsaW5rLmlubmVySFRNTCA9IFwianVtcCB0byBnb29nbGVcIjtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGluayk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cbiIsIi8qKlxuICogUGl4aUpT44GuVGV4dHVyZeOBqOOBl+OBpuaJseOBiOOCi+OAgWF1dG9wbGF55Y+v6IO944GqVmlkZW9FbGVtZW5044KS5Y+W5b6X44GZ44KL44CCXG4gKiBWaWRlb0VsZW1lbnTjgavjga/jgIFpT1PjgYrjgojjgbNDaHJvbWXjga5hdXRvcGxheeODneODquOCt+ODvOOCkuWbnumBv+OBmeOCi+OBn+OCgeOBruioreWumuOBjOOBleOCjOOBpuOBhOOCi+OAglxuICpcbiAqIEBwYXJhbSB1cmwg44Ki44K744OD44OI44GuVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXV0b1BsYXlhYmxlTW92aWUodXJsKSB7XG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XG4gICAgdmlkZW8uc3JjID0gdXJsO1xuICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoXCJwbGF5c2lubGluZVwiLCBcIlwiKTtcbiAgICByZXR1cm4gdmlkZW87XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgaW5pdEFwcCB9IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0IHsgbG9hZEF1dG9QbGF5YWJsZU1vdmllIH0gZnJvbSBcIi4uXCI7XG5cbmNvbnN0IG9uRG9tQ29udGVudHNMb2FkZWQgPSAoKSA9PiB7XG4gIGNvbnN0IFcgPSA4MDA7XG4gIGNvbnN0IEggPSA2MDA7XG4gIGNvbnN0IGFwcCA9IGluaXRBcHAoVywgSCk7XG5cbiAgY29uc3QgdmlkZW8gPSBsb2FkQXV0b1BsYXlhYmxlTW92aWUoXCJzZXZlcmUtc3Rvcm0tb3Zlci1tYW5kdXJhaC5tcDRcIik7XG4gIGNvbnN0IHNwcml0ZSA9IFNwcml0ZS5mcm9tKHZpZGVvKTtcbiAgc3ByaXRlLnNjYWxlLnNldChXIC8gMTA4MCk7XG4gIGFwcC5zdGFnZS5hZGRDaGlsZChzcHJpdGUpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC5pbm5lckhUTUwgPSBgXG5TZXZlcmUgc3Rvcm0gb3ZlciBNYW5kdXJhaCBieSBHcmFoYW1lIEtlbGFoZXI8YnI+XG5MSUNFTlNFIDogPGEgaHJlZj1cImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXCI+Q0MtQlkgMy4wPC9hPjxicj5cbjxhIGhyZWY9J2h0dHBzOi8vbWF6d2FpLmNvbS92aWRlby9zZXZlcmUtc3Rvcm0tb3Zlci1tYW5kdXJhaC80NTUxMDAnPmh0dHBzOi8vbWF6d2FpLmNvbS92aWRlby9zZXZlcmUtc3Rvcm0tb3Zlci1tYW5kdXJhaC80NTUxMDA8L2E+XG5gO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHApO1xufTtcblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gIG9uRG9tQ29udGVudHNMb2FkZWQoKTtcbn0gZWxzZSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG9uRG9tQ29udGVudHNMb2FkZWQpO1xufVxuIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uIiwiaW5pdEFwcCIsInciLCJoIiwiYXBwIiwid2lkdGgiLCJoZWlnaHQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZpZXciLCJpbml0TGluayIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImlubmVySFRNTCIsImRpdiIsImxvYWRBdXRvUGxheWFibGVNb3ZpZSIsInVybCIsInZpZGVvIiwic3JjIiwibXV0ZWQiLCJzZXRBdHRyaWJ1dGUiLCJTcHJpdGUiLCJvbkRvbUNvbnRlbnRzTG9hZGVkIiwiVyIsIkgiLCJzcHJpdGUiLCJmcm9tIiwic2NhbGUiLCJzZXQiLCJzdGFnZSIsImFkZENoaWxkIiwicCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///760\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var Q=__webpack_module_cache__[e];if(void 0!==Q)return Q.exports;var F=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(F.exports,F,F.exports,__webpack_require__),F.loaded=!0,F.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,Q,F,i)=>{if(!Q){var U=1/0;for(n=0;n<deferred.length;n++){for(var[Q,F,i]=deferred[n],B=!0,c=0;c<Q.length;c++)(!1&i||U>=i)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](Q[c])))?Q.splice(c--,1):(B=!1,i<U&&(U=i));if(B){deferred.splice(n--,1);var d=F();void 0!==d&&(e=d)}}return e}i=i||0;for(var n=deferred.length;n>0&&deferred[n-1][2]>i;n--)deferred[n]=deferred[n-1];deferred[n]=[Q,F,i]},__webpack_require__.d=(e,Q)=>{for(var F in Q)__webpack_require__.o(Q,F)&&!__webpack_require__.o(e,F)&&Object.defineProperty(e,F,{enumerable:!0,get:Q[F]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,Q)=>Object.prototype.hasOwnProperty.call(e,Q),__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={666:0};__webpack_require__.O.j=Q=>0===e[Q];var Q=(Q,F)=>{var i,U,[B,c,d]=F,n=0;if(B.some((Q=>0!==e[Q]))){for(i in c)__webpack_require__.o(c,i)&&(__webpack_require__.m[i]=c[i]);if(d)var s=d(__webpack_require__)}for(Q&&Q(F);n<B.length;n++)U=B[n],__webpack_require__.o(e,U)&&e[U]&&e[U][0](),e[U]=0;return __webpack_require__.O(s)},F=self.webpackChunk_masatomakino_pixijs_loader_util=self.webpackChunk_masatomakino_pixijs_loader_util||[];F.forEach(Q.bind(null,0)),F.push=Q.bind(null,F.push.bind(F))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(760)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();