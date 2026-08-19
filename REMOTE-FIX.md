# 修复 ghproxy 自动代理导致的 push 失败

`gh` CLI 在中国境内会通过 `ghproxy.net` 镜像 GitHub，但该镜像**只读**，
所以 push 会报：

```
remote: Invalid username or token. Password authentication is not supported for Git operations.
fatal: Authentication failed for 'https://ghproxy.net/https://github.com/.../dsh-mcskin.git/'
```

解决方案：把 remote 改成直连 GitHub，用 PAT token 认证。

## Step 1：创建 GitHub Personal Access Token (PAT)

1. 去 https://github.com/settings/tokens/new
2. **Note**: `dsh-mcskin-push`
3. **Expiration**: 90 天（或者 No expiration，但有安全风险）
4. **Scopes**: 勾选 `repo`（完整仓库权限）
5. 点 **Generate token**
6. **复制**生成的 token（只显示一次！以 `ghp_` 开头）

## Step 2：替换 remote + 推

在你的 cmd 里跑（**替换 `<TOKEN>`** 为你刚复制的 token）：

```sh
cd F:\MyCode\dsh-mcskin-plugin
git remote set-url origin https://DongDong1997:<TOKEN>@github.com/DongDong1997/dsh-mcskin.git
```

但更好的做法是不要把 token 写进 URL（避免被 .git/config 提交）。用 credential helper：

```sh
git remote set-url origin https://github.com/DongDong1997/dsh-mcskin.git
git credential-manager reject https://github.com
git push -u origin main
```

第一条命令改 URL 为直连 GitHub。第二条让 Windows Credential Manager 忘记之前的代理密码。第三条触发 push，会弹一个认证窗口让你填 username + token（**username 是 `DongDong1997`，password 粘贴 token**）。

或者最简单：URL 里临时带 token（用完会留在 .git/config，记得推完后清理）：

```sh
git remote set-url origin https://DongDong1997:<TOKEN>@github.com/DongDong1997/dsh-mcskin.git
git push -u origin main
git push --tags
```

## Step 3：推 tag

```sh
git tag v0.1.0
git push --tags
```

## 推完后清理

把 token 从 URL 移除（避免 .git/config 暴露）：

```sh
git remote set-url origin https://github.com/DongDong1997/dsh-mcskin.git
```

---

## 备选：完全用 SSH（推荐，如果配置了 SSH key）

如果你已经在 `~/.ssh/id_rsa.pub` 或 `~/.ssh/id_ed25519.pub` 注册了 SSH key 到 GitHub：

```sh
cd F:\MyCode\dsh-mcskin-plugin
git remote set-url origin git@github.com:DongDong1997/dsh-mcskin.git
git push -u origin main
git push --tags
```

SSH 不会被 ghproxy 代理（因为协议不同），是更稳的方案。

如果还没有 SSH key，去 https://github.com/settings/keys 生成：
```sh
ssh-keygen -t ed25519 -C "hdec@local"
# 把 %USERPROFILE%\.ssh\id_ed25519.pub 内容粘到 GitHub
```
