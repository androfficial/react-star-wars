const path = require('path');
const { alias } = require('react-app-rewire-alias');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  webpack(config, env) {
    if (env === 'development') {
      config.plugins.push(
        new StyleLintPlugin({
          configFile: path.resolve(__dirname, '.stylelintrc.json'),
          files: path.resolve(__dirname, 'src/styles/**/*.{sass,scss}'),
          failOnError: false,
        })
      );
    }

    alias({
      '@assets': 'src/assets',
      '@components': 'src/components',
      '@constants': 'src/constants',
      '@context': 'src/context',
      '@hoc': 'src/hoc',
      '@hooks': 'src/hooks',
      '@pages': 'src/pages',
      '@redux': 'src/redux',
      '@services': 'src/services',
      '@styles': 'src/styles',
      '@utils': 'src/utils',
    })(config);

    return config;
  },
};
