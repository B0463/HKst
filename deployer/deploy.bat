cd ..
rd /s .git
rd /s public
rd /s src
del index.html
del .gitignore
del package-lock.json
del package.json
del README.md
del tsconfig.json
del tsconfig.node.json
del vite.config.ts
cd server
rd /s src
del tsconfig.json
md ssl
git clone https://github.com/B0463/ProtyzSTSSL.git
move ./ProtyzSTSSL/ssl.key ./ssl/ssl.key
move ./ProtyzSTSSL/ssl.crt ./ssl/ssl.crt
cd ProtyzSTSSL
rd /s .git
cd ..
rd /s ProtyzSTSSL