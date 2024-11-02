/* config-overrides.js */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');


module.exports = function override(config, env) {
    //do stuff with the webpack config...
    const inlineChunkHtmlPlugin = config.plugins.find(element => element.constructor.name === "InlineChunkHtmlPlugin");
    if (inlineChunkHtmlPlugin) {
        config.plugins.splice(config.plugins.indexOf(inlineChunkHtmlPlugin), 0,
            new HtmlInlineCssWebpackPlugin(),
            new HtmlInlineScriptPlugin()
        );
    }

    //Override HtmlWebpack plugin with preserving all options and modifying what we want
    const htmlWebpackPlugin = config.plugins.find(element => element.constructor.name === "HtmlWebpackPlugin");
    config.plugins.splice(config.plugins.indexOf(htmlWebpackPlugin), 1,
        new HtmlWebpackPlugin(
            {
                ...htmlWebpackPlugin.userOptions,
                inject: 'body'
            }
        )
    );

    return config;
}