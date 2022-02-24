module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@/screen': 'src/screen',
            '@/components': 'src/components',
            '@/navigation': 'src/navigation',
            '@/hooks': 'src/hooks',
            '@/styles': 'src/styles',
            '@/services': 'src/services',
            '@/types': 'src/types',
          },
        },
      ],
    ],
  };
};
