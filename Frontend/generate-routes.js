import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Define your Clean URL routes here
const routes = [
  'about',
  'committee',
  'contact',
  'registration',
  'call-for-paper'
];

// Setup paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

console.log(' Generating PHP routes for clean URLs...');

if (!fs.existsSync(distDir)) {
  console.error('Error: "dist" folder not found. Run "npm run build" first.');
  process.exit(1);
}

// 2. The magic PHP file content
const phpContent = `<?php include __DIR__ . '/../index.html'; ?>`;

// 3. Create a folder and index.php for each route
routes.forEach(route => {
  const routeDir = path.join(distDir, route);
  
  // Create folder if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // Write the index.php file inside it
  fs.writeFileSync(path.join(routeDir, 'index.php'), phpContent);
  console.log(` Created route: /${route}/`);
});

console.log(' All routes generated! Ready to upload.');