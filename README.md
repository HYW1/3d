# 3D 打字机静谧书桌

基于 React、Three.js、Vite 和 Tailwind CSS 的交互式 3D 作品集。

## 本地运行

需要 Bun 1.x：

```bash
bun install --frozen-lockfile
bun run dev
```

访问 <http://localhost:3000>。

## 生产构建

```bash
bun run lint
bun run build
bun run preview --host 0.0.0.0
```

构建产物位于 `dist/`，资源使用相对路径，可部署到域名根路径或子路径。

## Docker 部署

```bash
docker build -t quiet-desk .
docker run --rm -p 8080:8080 quiet-desk
```

站点地址为 <http://localhost:8080>，健康检查地址为
<http://localhost:8080/healthz>。容器监听 `8080`，可直接用于 Cloud Run
或其他支持 OCI 容器的平台。
