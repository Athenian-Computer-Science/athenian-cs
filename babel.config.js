module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
  themes: ['@docusaurus/theme-live-codeblock'],
};
