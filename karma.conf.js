module.exports = function(config) {
  config.set({
    // @Setting for karma
    frameworks: ["jasmine", "jasmine-matchers"],
    preprocessors: {
      "./js/*.js": ["coverage"]
    },
    files: ["./js/*.js", "./test/*.js"],
    plugins: [
      "karma-jasmine",
      "karma-jasmine-matchers",
      "karma-chrome-launcher",
      "karma-coverage"
    ],
    reporters: ["dots", "coverage"],
    color: true,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    coverageReporter: {
      dir: "coverage/",
      reporters: [
        {
          type: "html",
          subdir: "html"
        }
      ]
    }
  });
};
