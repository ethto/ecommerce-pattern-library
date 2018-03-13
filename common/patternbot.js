(function () {
/**
 * Patternbot includes
 * https://github.com/thomasjbradley/patternbot-includes
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @copyright 2018 Thomas J Bradley
 * @license MIT
 */
const patternBotIncludes = function (manifest) {
  'use strict';

  const loadingScreenConfig = {
    id: 'patternbot-loading-screen',
    cssId: 'patternbot-loading-screen-css',
    get css() { return `
      div#${loadingScreenConfig.id} {
        all: initial;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${manifest.commonInfo.readme.attributes.backgroundColour};
        border: 0;
        opacity: 1;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        text-align: center;
      }

      h1#patternbot-loading-screen-title {
        all: initial;
        margin: 0;
        padding: 0;
        background-color: transparent;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        text-align: center;
      }

      svg#patternbot-loading-gears {
        margin-bottom: 10px;
        height: 64px;
        width: 64px;
        opacity: .8;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-top {
        opacity: .5;
        animation: patternbot-loading-spin 2s linear infinite;
        transform-origin: 80.8px 80.8px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-bottom {
        opacity: .7;
        animation: patternbot-loading-spin 2s linear reverse infinite;
        transform-origin: 176.3px 176.3px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      @keyframes patternbot-loading-spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `},
    get html() { return `
      <div id="${loadingScreenConfig.id}">
        <svg id="patternbot-loading-gears" viewBox="0 0 256 256" width="256" height="256">
          <path id="patternbot-loading-gears-top" d="M151.3 86.9a51.3 51.3 0 0 0 .2-6.1 51.3 51.3 0 0 0-.2-6.1l-12-.9a57.9 57.9 0 0 0-4.3-15.9l9.9-6.8a59.2 59.2 0 0 0-6.1-10.6l-10.9 5a59.6 59.6 0 0 0-11.6-11.6l5.3-10.9a59.2 59.2 0 0 0-10.6-6.2l-7.1 9.7a60.2 60.2 0 0 0-15.8-4.2l-.9-12a57.5 57.5 0 0 0-6.4-.2 51.3 51.3 0 0 0-6.1.2l-.9 12A57.9 57.9 0 0 0 58 26.5l-7-9.7A59.2 59.2 0 0 0 40.4 23l5 10.9a68.4 68.4 0 0 0-11.8 11.5l-10.6-5A59.2 59.2 0 0 0 16.8 51l9.7 6.8a59.5 59.5 0 0 0-4.2 16l-11.8.9a23 23 0 0 0-.5 5.9 51.3 51.3 0 0 0 .2 6.1l11.8.9a59.5 59.5 0 0 0 4.2 16l-9.7 6.8a59.2 59.2 0 0 0 6.1 10.6l10.6-5A54.8 54.8 0 0 0 45 127.6l-5 10.9a59.2 59.2 0 0 0 10.6 6.1l6.8-9.7a60.2 60.2 0 0 0 15.8 4.2l.9 12h6.4a51.3 51.3 0 0 0 6.1-.2l.9-12a60.2 60.2 0 0 0 15.8-4.2l6.8 9.9a59.2 59.2 0 0 0 10.6-6.1l-5-11.1a53.7 53.7 0 0 0 11.6-11.6l10.9 5.2a59.2 59.2 0 0 0 6.1-10.6l-9.7-6.8a60.2 60.2 0 0 0 4.2-15.8zm-70.5 29.3a35.4 35.4 0 1 1 35.4-35.4 35.3 35.3 0 0 1-35.4 35.4z"/>
          <path id="patternbot-loading-gears-bottom" d="M242.8 200.6a51.3 51.3 0 0 0 1.8-5.9 51.3 51.3 0 0 0 1.4-6l-11.4-4a57.9 57.9 0 0 0 0-16.4l11.3-4a59.2 59.2 0 0 0-3.2-11.8l-11.8 2a59.6 59.6 0 0 0-8.1-14.2l7.8-9.1a59.2 59.2 0 0 0-8.7-8.7l-9.4 7.5a60.2 60.2 0 0 0-14.2-8.2l2.2-11.9a57.5 57.5 0 0 0-6.1-1.9 51.3 51.3 0 0 0-6-1.4l-4 11.4a57.9 57.9 0 0 0-16.4 0l-4.1-11.1a59.2 59.2 0 0 0-11.8 3.2l2 11.8a68.4 68.4 0 0 0-14.4 8.1l-9-7.5a59.2 59.2 0 0 0-8.7 8.7l7.6 9.1a59.5 59.5 0 0 0-8.3 14.4l-11.3-2.4a23 23 0 0 0-2 5.6 51.3 51.3 0 0 0-1.4 6l11.1 4a59.5 59.5 0 0 0-.1 16.6l-11.1 4.1a59.2 59.2 0 0 0 3.2 11.8l11.5-2a54.8 54.8 0 0 0 8.4 14.2l-7.6 9.2a59.2 59.2 0 0 0 8.7 8.7l9.1-7.6a60.2 60.2 0 0 0 14.2 8.2l-2.3 11.9 6.1 1.7a51.3 51.3 0 0 0 6 1.4l4-11.4a60.2 60.2 0 0 0 16.4 0l4 11.3a59.2 59.2 0 0 0 11.8-3.2l-1.9-12a53.7 53.7 0 0 0 14.2-8.1l9.1 7.8a59.2 59.2 0 0 0 8.7-8.7l-7.6-9.1a60.2 60.2 0 0 0 8.2-14.2zm-75.7 9.9a35.4 35.4 0 1 1 43.4-24.9 35.3 35.3 0 0 1-43.4 24.9z"/>
        </svg>
        <h1 id="patternbot-loading-screen-title">Building page…</h1>
      </div>
    `},
  };

  let downloadedAssets = {};

  const downloadHandler = function (e) {
    e.target.removeEventListener('load', downloadHandler);
    downloadedAssets[e.target.getAttribute('href')] = true;
  };

  const findRootPath = function () {
    const rootMatcher = /\/common\//;
    const allScripts = document.querySelectorAll('script:not([type])');
    let t = allScripts.length, i = 0;

    for (i = 0; i < t; i++) {
      if (rootMatcher.test(allScripts[i].src)) {
        return allScripts[i].src.split(rootMatcher)[0];
        break;
      }
    }
  };

  const addCssFile = function (href) {
    const newLink = document.createElement('link');

    downloadedAssets[href] = false;

    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('href', href);
    newLink.addEventListener('load', downloadHandler);

    document.head.appendChild(newLink);
  }

  const bindAllCssFiles = function (rootPath) {
    if (manifest.commonInfo && manifest.commonInfo.readme && manifest.commonInfo.readme.attributes &&  manifest.commonInfo.readme.attributes.fontUrl) {
      addCssFile(manifest.commonInfo.readme.attributes.fontUrl);
    }

    if (manifest.patternLibFiles && manifest.patternLibFiles.commonParsable) {
      if (manifest.patternLibFiles.commonParsable.modulifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.modulifier}`);
      if (manifest.patternLibFiles.commonParsable.gridifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.gridifier}`);
      if (manifest.patternLibFiles.commonParsable.typografier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.typografier}`);
      if (manifest.patternLibFiles.commonParsable.theme) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.theme}`);
    }

    manifest.userPatterns.forEach((pattern) => {
      if (!pattern.css) return;

      pattern.css.forEach((css) => {
        addCssFile(`../${css.localPath}`);
      });
    });
  };

  const getPatternInfo = function (patternElem) {
    let patternInfoJson;
    const data = patternElem.innerText.trim();

    if (!data) return {}

    try {
      patternInfoJson = JSON.parse(data);
      return patternInfoJson;
    } catch (e) {
      console.group('JSON error in pattern include');
      console.log(patternElem.dataset.pattern);
      console.log(patternElem.innerText);
      console.log(e);
      console.groupEnd();
      return {};
    }
  };

  const getPatternUrl = function (rootPath, patternName) {
    patternName = (patternName.slice(-5) === '.html') ? patternName.slice(0, -5) : patternName;
    return `${rootPath}/patterns/${patternName}.html`;
  };

  const constructPattern = function (rootPath, patternElem) {
    return {
      name: patternElem.dataset.pattern,
      url: getPatternUrl(rootPath, patternElem.dataset.pattern),
      html: false,
      elem: false,
    };
  };

  const htmlStringToElem = function (html) {
    const doc = (new DOMParser()).parseFromString(html, 'text/html');
    return doc.body;
  };

  const replaceElementValue = function (elem, sel, data) {
    elem.innerText = data;
  };

  const replaceAttributeValue = function (elem, sel, data) {
    const isXlinkAttr = /xlink\:/.test(sel);
    const attr = sel.match(/\[([^\]]+)\]$/)[1];

    if (isXlinkAttr) {
      elem.setAttributeNS('http://www.w3.org/1999/xlink', attr, data);
    } else {
      elem.setAttribute(attr, data);
    }
  };

  const outputPattern = function (patternElem, patternDetails) {
    let patternOutElem, patternData;

    if (!patternDetails.html) return;

    patternOutElem = htmlStringToElem(patternDetails.html);
    patternData = getPatternInfo(patternElem);

    Object.keys(patternData).forEach((sel) => {
      const isAttributeSelector = /\[.*\]/.test(sel);
      const jsSel = sel.replace(/\[.*:/, '[*|');
      const elem = patternOutElem.querySelector(jsSel);

      if (!elem) {
        console.group('Cannot find element');
        console.log(`Selector: ${sel}`);
        console.log(`Pattern: ${patternDetails.name}`);
        console.log(JSON.stringify(patternData, null, 2));
        console.groupEnd();
        return;
      }

      if (isAttributeSelector) {
        replaceAttributeValue(elem, sel, patternData[sel]);
      } else {
        replaceElementValue(elem, sel, patternData[sel]);
      }
    });

    patternElem.parentNode.replaceChild(patternOutElem.firstElementChild, patternElem);
  };

  const showLoadingScreen = function () {
    const loadCssElem = document.createElement('style');

    loadCssElem.id = loadingScreenConfig.cssId;
    loadCssElem.appendChild(document.createTextNode(loadingScreenConfig.css));
    document.head.appendChild(loadCssElem);
    document.body.innerHTML += loadingScreenConfig.html;
  };

  const hideLoadingScreen = function () {
    const allDownloadedInterval = setInterval(() => {
      if (Object.values(downloadedAssets).includes(false)) return;

      clearInterval(allDownloadedInterval);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(loadingScreenConfig.id).remove();
          document.getElementById(loadingScreenConfig.cssId).remove();
        });
      });
    }, 50);
  };

  const findAllPatternTags = function () {
    return document.querySelectorAll('script[type="application/json"][data-pattern]');
  };

  const constructAllPatterns = function (rootPath, allPatternTags) {
    let allPatterns = {};

    [].forEach.call(allPatternTags, (patternElem) => {
      if (allPatterns[patternElem.dataset.pattern]) return;

      allPatterns[patternElem.dataset.pattern] = constructPattern(rootPath, patternElem);
    });

    return allPatterns;
  };

  const buildPatternFetchPromises = function (allPatternUrls) {
    return allPatternUrls.map((url) => {
      return new Promise((resolve, reject) => {
        downloadedAssets[url] = false;

        fetch(url).then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.text();
          } else {
            console.group('Cannot location pattern');
            console.log(resp.url);
            console.log(`Error ${resp.status}: ${resp.statusText}`);
            console.groupEnd();
            return '';
          }
        }).then(function (html) {
          downloadedAssets[url] = true;
          resolve(html);
        }).catch((e) => {
          console.group('Download error');
          console.log(url);
          console.log(e);
          console.groupEnd();
          resolve('');
        });
      });
    });
  };

  const loadAllPatterns = function (allPatterns) {
    let patternUrls = {};
    let allPatternKeys = Object.keys(allPatterns);

    allPatternKeys.forEach((patternKey) => {
      patternUrls[patternKey] = allPatterns[patternKey].url;
    });

    return new Promise((resolve, reject) => {
      Promise.all(buildPatternFetchPromises(Object.values(patternUrls))).then((allPatternsHtml) => {
        allPatternsHtml.forEach((html, i) => {
          allPatterns[allPatternKeys[i]].html = html;
        });
        resolve(allPatterns);
      }).catch((e) => {
        console.group('Pattern load error');
        console.log(e);
        console.groupEnd();
        resolve(allPatterns);
      });
    });
  };

  const renderAllPatterns = function (allPatternTags, allLoadedPatterns) {
    [].forEach.call(allPatternTags, (elem) => {
      outputPattern(elem, allLoadedPatterns[elem.dataset.pattern]);
    });
  };

  const init = function () {
    let rootPath, patternsToLoad, allPatternTags = [], allPatterns = [];

    showLoadingScreen();

    rootPath = findRootPath();
    bindAllCssFiles(rootPath);
    allPatternTags = findAllPatternTags();
    allPatterns = constructAllPatterns(rootPath, allPatternTags);

    loadAllPatterns(allPatterns).then((allLoadedPatterns) => {
      renderAllPatterns(allPatternTags, allLoadedPatterns);
      hideLoadingScreen();
    }).catch((e) => {
      console.group('Pattern load error');
      console.log(e);
      console.groupEnd();
    });
  };

  document.addEventListener('DOMContentLoaded', init);
};


/** 
 * Patternbot library manifest
 * /Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library
 * @version 1520904080393
 */
const patternManifest_1520904080393 = {
  "commonInfo": {
    "modulifier": [
      "responsive",
      "images",
      "list-group",
      "embed",
      "media-object",
      "icons",
      "hidden",
      "positioning",
      "nice-lists",
      "forms",
      "buttons",
      "accessibility",
      "print"
    ],
    "modulifierUrl": "responsive;images;list-group;embed;media-object;icons;hidden;positioning;nice-lists;forms;buttons;accessibility;print",
    "gridifier": [
      {
        "prefix": "xs",
        "columns": 4,
        "mq": 0
      },
      {
        "prefix": "s",
        "columns": 4,
        "mq": 25
      },
      {
        "prefix": "m",
        "columns": 4,
        "mq": 38
      },
      {
        "prefix": "l",
        "columns": 4,
        "mq": 60
      }
    ],
    "gridifierUrl": "xs,4,0,0,0;s,4,25,0,0;m,4,38,1,1;l,4,60,1,1",
    "typografier": [
      {
        "mq": 0,
        "fontSize": 100,
        "lineHeight": 1.3,
        "scale": 1.333
      },
      {
        "mq": 38,
        "fontSize": 110,
        "lineHeight": 1.4,
        "scale": 1.333
      },
      {
        "mq": 60,
        "fontSize": 120,
        "lineHeight": 1.5,
        "scale": 1.333
      },
      {
        "mq": 90,
        "fontSize": 130,
        "lineHeight": 1.5,
        "scale": 1.333
      }
    ],
    "typografierUrl": "0,100,1.3,1.333,0;38,110,1.4,1.333,1;60,120,1.5,1.333,1;90,130,1.5,1.333,1",
    "theme": {
      "colours": {
        "primary": [
          {
            "name": "--color-primary",
            "namePretty": "Primary",
            "raw": "#5eafb5",
            "hex": "#5eafb5",
            "rgba": "rgba(94, 175, 181, 1)"
          }
        ],
        "secondary": [
          {
            "name": "--color-secondary",
            "namePretty": "Secondary",
            "raw": "#505252",
            "hex": "#505252",
            "rgba": "rgba(80, 82, 82, 1)"
          }
        ],
        "neutral": [],
        "accent": [
          {
            "name": "--color-highlight",
            "namePretty": "Highlight",
            "raw": "#ff693c",
            "hex": "#ff693c",
            "rgba": "rgba(255, 105, 60, 1)"
          },
          {
            "name": "--color-accent",
            "namePretty": "Accent",
            "raw": "#ddd",
            "hex": "#ddd",
            "rgba": "rgba(221, 221, 221, 1)"
          }
        ]
      },
      "fonts": {
        "primary": {
          "name": "--font-primary",
          "namePretty": "Open Sans",
          "raw": "\"Open Sans\", sans-serif",
          "weights": {
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": false
            },
            "bold": {
              "weight": "bold",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "secondary": {
          "name": "--font-secondary",
          "namePretty": "Roboto Slab",
          "raw": "\"Roboto Slab\", sans-serif",
          "weights": {
            "bold": {
              "weight": "bold",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "accent": []
      },
      "coloursRaw": {
        "--color-primary": "#5eafb5",
        "--color-secondary": "#505252",
        "--color-highlight": "#ff693c",
        "--color-accent": "#ddd"
      },
      "fontsRaw": {
        "--font-primary": "\"Open Sans\", sans-serif",
        "--font-secondary": "\"Roboto Slab\", sans-serif"
      }
    },
    "readme": {
      "attributes": {
        "name": "bubbl",
        "fontUrl": "https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto+Slab:700",
        "icons": {
          "icons": {
            "facebook-logo": {
              "background-color": "var(--color-secondary)",
              "backgroundColour": "#505252",
              "interfaceColours": {
                "primary": 255,
                "opposite": 0
              }
            },
            "insta-logo": {
              "background-color": "var(--color-secondary)",
              "backgroundColour": "#505252",
              "interfaceColours": {
                "primary": 255,
                "opposite": 0
              }
            },
            "vimeo-logo": {
              "background-color": "var(--color-secondary)",
              "backgroundColour": "#505252",
              "interfaceColours": {
                "primary": 255,
                "opposite": 0
              }
            },
            "hidePopOutButton": true,
            "hideCode": true,
            "notResizable": true
          }
        },
        "backgroundColour": "#fff",
        "interfaceColours": {
          "primary": 0,
          "opposite": 255
        }
      }
    },
    "icons": [
      "bubble-wrap-bag",
      "bubble-wrap-roll",
      "bubble-wrap-sheet",
      "error",
      "facebook-logo",
      "insta-logo",
      "vimeo-logo"
    ],
    "interfaceColours": {
      "primary": 0,
      "opposite": 255
    }
  },
  "patternLibFiles": {
    "commonParsable": {
      "gridifier": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/common/grid.css",
      "typografier": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/common/type.css",
      "modulifier": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/common/modules.css",
      "theme": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/common/theme.css"
    },
    "imagesParsable": {
      "icons": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/images/icons.svg"
    },
    "logos": {
      "sizeLarge": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/images/logo-256.svg",
      "size64": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/images/logo-64.svg",
      "size32": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/images/logo-32.svg",
      "size16": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/images/logo-16.svg",
      "size16Local": "logo-16.svg",
      "sizeLargeLocal": "logo-256.svg",
      "size32Local": "logo-32.svg",
      "size64Local": "logo-64.svg"
    },
    "patterns": [
      "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons",
      "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards",
      "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footers",
      "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms",
      "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/headers",
      "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/sections & navs"
    ],
    "pages": []
  },
  "userPatterns": [
    {
      "name": "buttons",
      "namePretty": "Buttons",
      "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons",
      "html": [
        {
          "name": "buttons-on-dark",
          "namePretty": "Buttons on dark",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons/buttons-on-dark.html",
          "localPath": "patterns/buttons/buttons-on-dark.html",
          "readme": {
            "backgroundColor": "#505252",
            "backgroundColour": "#505252",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        },
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons/buttons.html",
          "localPath": "patterns/buttons/buttons.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons/README.md",
          "localPath": "patterns/buttons/README.md"
        }
      ],
      "css": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/buttons/buttons.css",
          "localPath": "patterns/buttons/buttons.css"
        }
      ]
    },
    {
      "name": "cards",
      "namePretty": "Cards",
      "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards",
      "html": [
        {
          "name": "basic-card",
          "namePretty": "Basic card",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards/basic-card.html",
          "localPath": "patterns/cards/basic-card.html",
          "readme": {}
        },
        {
          "name": "icon-card",
          "namePretty": "Icon card",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards/icon-card.html",
          "localPath": "patterns/cards/icon-card.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards/README.md",
          "localPath": "patterns/cards/README.md"
        }
      ],
      "css": [
        {
          "name": "cards",
          "namePretty": "Cards",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/cards/cards.css",
          "localPath": "patterns/cards/cards.css"
        }
      ]
    },
    {
      "name": "footers",
      "namePretty": "Footers",
      "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footers",
      "html": [
        {
          "name": "main-footer",
          "namePretty": "Main footer",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footers/main-footer.html",
          "localPath": "patterns/footers/main-footer.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "main-footer",
          "namePretty": "Main footer",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/footers/main-footer.css",
          "localPath": "patterns/footers/main-footer.css"
        }
      ]
    },
    {
      "name": "forms",
      "namePretty": "Forms",
      "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms",
      "html": [
        {
          "name": "check-boxes",
          "namePretty": "Check boxes",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/check-boxes.html",
          "localPath": "patterns/forms/check-boxes.html"
        },
        {
          "name": "drop-down",
          "namePretty": "Drop down",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/drop-down.html",
          "localPath": "patterns/forms/drop-down.html"
        },
        {
          "name": "numbers",
          "namePretty": "Numbers",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/numbers.html",
          "localPath": "patterns/forms/numbers.html"
        },
        {
          "name": "text",
          "namePretty": "Text",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/text.html",
          "localPath": "patterns/forms/text.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "forms",
          "namePretty": "Forms",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/forms/forms.css",
          "localPath": "patterns/forms/forms.css"
        }
      ]
    },
    {
      "name": "headers",
      "namePretty": "Headers",
      "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/headers",
      "html": [],
      "md": [],
      "css": []
    },
    {
      "name": "sections-navs",
      "namePretty": "Sections & navs",
      "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/sections & navs",
      "html": [
        {
          "name": "navs",
          "namePretty": "Navs",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/sections & navs/navs.html",
          "localPath": "patterns/sections & navs/navs.html"
        },
        {
          "name": "sections",
          "namePretty": "Sections",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/sections & navs/sections.html",
          "localPath": "patterns/sections & navs/sections.html"
        }
      ],
      "md": [],
      "css": [
        {
          "name": "navs",
          "namePretty": "Navs",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/sections & navs/navs.css",
          "localPath": "patterns/sections & navs/navs.css"
        },
        {
          "name": "sections",
          "namePretty": "Sections",
          "path": "/Users/estherjohnson/Documents/Algonquin/Semester 4/Web Dev IV/ecommerce-pattern-library/patterns/sections & navs/sections.css",
          "localPath": "patterns/sections & navs/sections.css"
        }
      ]
    }
  ],
  "config": {
    "patternLibFilename": "index.html",
    "manifestFilename": ".patternbot-manifest.json",
    "includesFilename": "patternbot.js",
    "commonFolder": "/common",
    "commonParsableFilenames": {
      "modulifier": "modules.css",
      "gridifier": "grid.css",
      "typografier": "type.css",
      "theme": "theme.css"
    },
    "imagesFolder": "/images",
    "imagesParsableFilenames": {
      "icons": "icons.svg"
    },
    "patternsFolder": "/patterns",
    "pagesFolder": "/pages"
  }
};

patternBotIncludes(patternManifest_1520904080393);
}());