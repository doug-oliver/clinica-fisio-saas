module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest' // Garante que arquivos JS/TSX sejam transformados
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-router-dom)/' // Permite transformação do react-router-dom
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // Extensões suportadas

  moduleExports: {
    moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  },
  
};