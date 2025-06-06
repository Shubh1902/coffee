const { execSync } = require('child_process');

const component = process.argv[2];
if (!component) {
  console.error('❌ Please provide a component name');
  process.exit(1);
}

execSync(`nx g @nx/react:library libs/components/${component} --publishable --bundler=vite`, {
  stdio: 'inherit',
});
