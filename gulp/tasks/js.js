import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, 
        { sourcemap: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            output: {
                filename: 'app.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}
// import uglify from 'gulp-uglify';
// export const js = () => {
//     return app.gulp.src(app.path.src.js)
//         .pipe(app.plugins.plumber(
//             app.plugins.notify.onError({
//                 title: "JS",
//                 message: "Error: <%= error.message %>"
//             })
//         ))
//         .pipe(webpack({
//             mode: app.isBuild ? "production" : "development",
//             entry: {
//                 app: "./src/js/app.js",
//                 preview: "./src/js/preview.js",  
//                 burger: "./src/js/burger.js",
//                 grocery: "./src/js/grocery.js",
//                 gym: "./src/js/gym.js",
//                 mealkits: "./src/js/mealkits.js",
//                 bootstrap: "./src/js/bootstrap.js",
//                 jquery: "./src/js/jquery.js",
//                 novelist: "./src/js/novelist.js",                
//             },
//             output: {
//                 filename: '[name].js',
//             },
//           }))
//         .pipe(uglify())
//         .pipe(app.gulp.dest(app.path.build.js))
//         .pipe(app.plugins.browsersync.stream());
// }

