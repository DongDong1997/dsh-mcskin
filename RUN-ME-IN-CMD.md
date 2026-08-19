# 在你的 cmd 里跑这 4 条命令

```sh
cd F:\MyCode\dsh-mcskin-plugin

# 1. 加 GitHub 话题（dsh-plugin 是关键，能让 DSH 用户搜到）
gh repo edit DongDong1997/dsh-mcskin --add-topic dsh-plugin --add-topic deepseek-harness --add-topic minecraft --add-topic theme

# 2. 创建 v0.1.0 release（带 README 当 release notes）
gh release create v0.1.0 --title "v0.1.0 — Minecraft theme for DSH Web GUI" --notes-file README.md

# 3. 验证
gh repo view DongDong1997/dsh-mcskin --json name,url,repositoryTopics
```

完事把输出贴回来。

跑完上面后，下一步是发布到 npm：

```sh
cd F:\MyCode\dsh-mcskin-plugin
npm login
npm publish --access public
```

`npm publish` 之前会先跑 `prepublishOnly`（clean + build + test），输出会很长，把最后几行（包含 `+ dsh-mcskin@0.1.0` 或类似）贴给我。
