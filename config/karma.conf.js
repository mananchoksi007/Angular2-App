module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: './karma.test.bundle.js' }
        ],
        preprocessors: {
            './karma.test.bundle.js': ['webpack', 'sourcemap']
        },
        webpack: require('./webpack.dev.js'),
        reporters: ['spec'],
        specReporter: {
            failFast: true,
            suppressErrorSummary: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    });
}