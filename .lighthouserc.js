module.exports = {
  ci: {
    collect: {
      staticDistDir: '.', // This is where your built HTML files are located
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};