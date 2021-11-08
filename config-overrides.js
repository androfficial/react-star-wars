const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@assets':     'src/assets',
    '@components': 'src/components',
    '@constants':  'src/constants',
    '@pages':      'src/pages',
    '@redux':      'src/redux',
    '@services':   'src/services',
    '@styles':     'src/styles',
    '@utils':      'src/utils',
  })(config);

  return config;
};