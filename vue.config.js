module.exports = {
    baseUrl: './',
    assetsDir: 'static',

    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
    productionSourceMap: false,

    publicPath: './',

    css: {
      modules: true
    }
}