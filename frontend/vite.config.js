import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const apkDownloadPlugin = () => ({
  name: 'apk-download',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.includes('/download/floratune.apk')) {
        try {
          const filePath = path.resolve('public/floratune.apk');
          if (fs.existsSync(filePath)) {
            const stat = fs.statSync(filePath);
            res.setHeader('Content-Type', 'application/vnd.android.package-archive');
            res.setHeader('Content-Disposition', 'attachment; filename="floratune.apk"');
            res.setHeader('Content-Length', stat.size);

            if (req.method === 'HEAD') {
              res.end();
              return;
            }

            const readStream = fs.createReadStream(filePath);
            readStream.pipe(res);
            return;
          }
        } catch (e) {
          console.error('Error serving APK:', e);
        }
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apkDownloadPlugin()],
  base: '/FloraTune/',
  server: {
    host: true,
    port: 5174,
  }
})


