#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

/**
 * Script to automatically replace unescaped quotes and apostrophes in JSX text content
 * with their HTML entity equivalents (&apos;, &quot;)
 */

function fixJsxQuotes(content) {
  // This regex matches text content within JSX tags (between > and <)
  // and replaces straight quotes and apostrophes with HTML entities
  
  // Match JSX text content (simplified approach)
  return content.replace(
    />(([^<>{}]|\n)*?)</g,
    (match, textContent) => {
      if (!textContent || textContent.trim() === '') return match;
      
      // Replace apostrophes with &apos; in text content
      const fixed = textContent
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;');
      
      return `>${fixed}<`;
    }
  );
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJsxQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir, extensions = ['.tsx', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .next, and other common directories
        if (!['node_modules', '.next', 'out', 'build', '.git'].includes(item)) {
          files = files.concat(walkDirectory(fullPath, extensions));
        }
      } else if (stat.isFile() && extensions.some(ext => fullPath.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
const srcDir = path.join(process.cwd(), 'src');
console.log('🔍 Scanning for JSX/TSX files with unescaped quotes...\n');

const files = walkDirectory(srcDir);
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Done! Fixed ${fixedCount} file(s).`);
