const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      const regex = /import (\w+) from ['"]figma:asset\/.*?\.(png|svg|jpg)["'];?/g;
      
      content = content.replace(regex, (match, varName) => {
        modified = true;
        let pType = 'general.png';
        const nameLower = varName.toLowerCase();
        
        if (nameLower.includes('ellipse') || nameLower.includes('profile') || fullPath.includes('Profile') || fullPath.includes('Messages') || fullPath.includes('Chat') || nameLower.includes('avatar')) {
          pType = 'avatar.png';
        } else if (nameLower.includes('rectangle') || nameLower.includes('house') || nameLower.includes('property') || fullPath.includes('Details') || fullPath.includes('Home') || fullPath.includes('Reserve')) {
          pType = 'property.png';
        }

        // Calculate relative path to src/assets/placeholders
        // src is the base.
        // If file is in src/imports/foo.tsx -> ../assets/placeholders/
        // If file is in src/app/components/foo.tsx -> ../../assets/placeholders/
        const srcPath = path.resolve('src');
        const absFilePath = path.resolve(fullPath);
        const placeholdersDir = path.join(srcPath, 'assets', 'placeholders');
        let relPath = path.relative(path.dirname(absFilePath), placeholdersDir).replace(/\\/g, '/');
        
        return `import ${varName} from "${relPath}/${pType}";`;
      });

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated images in ${fullPath}`);
      }
    }
  }
}

processDir(path.join('src'));
