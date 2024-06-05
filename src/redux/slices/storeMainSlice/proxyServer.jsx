const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3001;

// API 요청을 프록시할 대상 서버 설정
const apiProxy = createProxyMiddleware('/api', {
  target: 'https://api.steampowered.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '' // API 경로에서 '/api'를 제거하고 전달
  }
});

// 프록시 미들웨어 등록
app.use('/api', apiProxy);

// 서버 시작
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
