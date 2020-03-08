module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['macros'],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
  ],
};
