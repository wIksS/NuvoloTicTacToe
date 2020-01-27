module.exports = {
  env: {
    test: {
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: ['@babel/plugin-transform-runtime']
    }
  }
};
