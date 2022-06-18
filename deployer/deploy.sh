cd ..
rm -r .git
rm -r public
rm -r src
rm index.html
rm .gitignore
rm package-lock.json
rm package.json
rm README.md
rm tsconfig.json
rm tsconfig.node.json
rm vite.config.ts
cd server
rm -r src
rm tsconfig.json
mkdir ssl
git clone https://github.com/B0463/ProtyzSTSSL.git
mv ./ProtyzSTSSL/ssl.key ./ssl/ssl.key
mv ./ProtyzSTSSL/ssl.crt ./ssl/ssl.crt
cd ProtyzSTSSL
rm -r .git
cd ..
rm -r ProtyzSTSSL