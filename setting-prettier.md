> 当前配置只适合 VS Code 编辑器。其他请移步至[编辑器配置](https://prettier.io/docs/en/editors.html)查看对应配置方法

## 安装 Prettier

可以打开 vscode 扩展市场，搜索 `Prettier - Code formatter` 来安装

[Visual Studio Code 扩展市场: Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

也可以直接 `Ctrl + P` 输入以下命令回车安装

```
ext install esbenp.prettier-vscode
```

## 配置 Prettier

如果是安装在 VS Code 编辑器里，则在编辑器配置项内开启 Prettier

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": { // 针对特定语言设置
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

配置保存后自动格式化

```
{
  "editor.formatOnSave": true,
  "[javascript]": { // 针对特定语言设置
      "editor.formatOnSave": true
  }
}
```

编辑器失去焦点后自动保存

```
{
  "files.autoSave": "onFocusChange"
}
```

---

最终配置结果

```
{
  "prettier.resolveGlobalModules": true,
  "editor.formatOnSave": true,
  "files.autoSave": "onFocusChange"
}
```
