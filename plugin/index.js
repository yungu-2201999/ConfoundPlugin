const pluginName = "ConfoundPlugin";
const fs = require("fs");

class ConfoundPlugin {
  constructor({ filename }) {
    this.filename = filename;
  }
  apply(compiler) {
    const pluginName = ConfoundPlugin.name;

    compiler.hooks.emit.tap(pluginName, (compilation) => {
      /**
       * 生成文件数量与文件大小的列表
       */
      const { assets } = compilation;
      let content = `## 文件名     大小\r\n`;
      for (const [filename, stat] of Object.entries(assets)) {
        content += `${filename}    ${stat.size()}\r\n`;
      }
      console.log(this.filename)
      assets[this.filename] = {
        source() {
          return content;
        },
        size() {
          return content.length;
        },
      };

      // end
    });
  }
}

module.exports = ConfoundPlugin;
