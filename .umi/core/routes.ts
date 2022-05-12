// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/usr/local/lib/node_modules/dumi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/usr/local/lib/node_modules/dumi/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/usr/local/lib/node_modules/dumi/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('/Users/ruizhengyun/laoyao/laoyao-github-docs/vscode/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1648650161736,
          "hero": {
            "title": "让开发变的简单",
            "actions": [
              {
                "text": "VSCode 调试 JavaScript 代码",
                "link": "/usage/debugger-js"
              }
            ]
          },
          "features": [
            {
              "icon": "/vscode/images/world.png",
              "title": "世界那么大，用代码来记录",
              "desc": "<div class=\"markdown\"><p><a href=\"https://run-kit.github.io/world/\" target=\"_blank\">https://run-kit.github.io/world/<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>"
            },
            {
              "icon": "/vscode/images/read.png",
              "title": "读书，让灵魂在路上",
              "desc": "<div class=\"markdown\"><p><a href=\"https://run-kit.github.io/read/\" target=\"_blank\">https://run-kit.github.io/read/<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>"
            },
            {
              "icon": "/vscode/images/blog.png",
              "title": "技术博客",
              "desc": "<div class=\"markdown\"><p><a href=\"https://run-kit.github.io/blog/\" target=\"_blank\">https://run-kit.github.io/blog/<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2021-present 老腰</p></div>",
          "slugs": [],
          "title": "Index"
        },
        "title": "Index - VS Code"
      },
      {
        "path": "/extension",
        "component": require('/Users/ruizhengyun/laoyao/laoyao-github-docs/vscode/docs/extension/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/extension/index.md",
          "updatedTime": 1648653820579,
          "title": "扩展",
          "order": 1,
          "toc": "menu",
          "slugs": [
            {
              "depth": 2,
              "value": "扩展",
              "heading": "扩展"
            }
          ],
          "nav": {
            "path": "/extension",
            "title": "Extension"
          }
        },
        "title": "扩展 - VS Code"
      },
      {
        "path": "/usage/debugger-js",
        "component": require('/Users/ruizhengyun/laoyao/laoyao-github-docs/vscode/docs/usage/debugger-js.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/usage/debugger-js.md",
          "updatedTime": 1648649829196,
          "title": "调试 JavaScript 代码",
          "order": 2,
          "toc": "menu",
          "slugs": [
            {
              "depth": 2,
              "value": "调试 JavaScript 代码",
              "heading": "调试-javascript-代码"
            }
          ],
          "nav": {
            "path": "/usage",
            "title": "Usage"
          }
        },
        "title": "调试 JavaScript 代码 - VS Code"
      },
      {
        "path": "/usage",
        "component": require('/Users/ruizhengyun/laoyao/laoyao-github-docs/vscode/docs/usage/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/usage/index.md",
          "updatedTime": 1648650061189,
          "title": "使用",
          "order": 2,
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "使用",
              "heading": "使用"
            }
          ],
          "nav": {
            "path": "/usage",
            "title": "Usage"
          }
        },
        "title": "使用 - VS Code"
      }
    ],
    "title": "VS Code",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
