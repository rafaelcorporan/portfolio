#!/usr/bin/env node

// Custom build script for Cloudflare Pages
// This ensures the static export is properly generated

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Cloudflare Pages build...');

try {
  // Run Next.js build (static export)
  console.log('📦 Building Next.js static export...');
  execSync('next build', { stdio: 'inherit' });

  // Verify out directory exists
  const outDir = path.join(process.cwd(), 'out');
  if (fs.existsSync(outDir)) {
    console.log('✅ Static export generated successfully in /out directory');
    
    // List contents of out directory
    const files = fs.readdirSync(outDir);
    console.log(`📁 Generated ${files.length} files and directories`);
  } else {
    console.error('❌ Static export failed - /out directory not found');
    process.exit(1);
  }

  console.log('🎉 Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}