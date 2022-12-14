import webpack from "webpack-stream";

// export const js = () => {
//     return app.gulp.src(app.path.src.js, 
//         { sourcemap: app.isDev })
//         .pipe(app.plugins.plumber(
//             app.plugins.notify.onError({
//                 title: "JS",
//                 message: "Error: <%= error.message %>"
//             })
//         ))
//         .pipe(webpack({
//             mode: app.isBuild ? "production" : "development",
//             output: {
//                 filename: 'app.min.js',
//             }
//         }))
//         .pipe(app.gulp.dest(app.path.build.js))
//         .pipe(app.plugins.browsersync.stream());
// }
import uglify from 'gulp-uglify';
export const js = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            entry: {
                app: "./src/js/app.js",
                rangeslider: "./src/js/rangeslider.min.js",
                ionrangeslider: "./src/js/ionrangeSlider.js",
                formstyler: "./src/js/jquery.formstyler.min.js",
                rateyo: "./src/js/jquery.rateyo.js",
            },
            output: {
                filename: '[name].js',
            },
          }))
        .pipe(uglify())
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}

