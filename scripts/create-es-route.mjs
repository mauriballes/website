import { cp, mkdir } from 'node:fs/promises';

await mkdir('dist/es', { recursive: true });
await cp('dist/index.html', 'dist/es/index.html');
