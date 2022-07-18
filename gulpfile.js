const gulp = require("gulp")
const exec = require("child_process").exec
const esbuild = require("gulp-esbuild")

function copy() {
  return gulp.src("public/**/*").pipe(gulp.dest("dist"))
}

function build() {
  return gulp
    .src("./src/index.ts")
    .pipe(
      esbuild({
        outfile: "bundle.js",
        sourcemap: "inline",
        bundle: true,
        target: ["chrome58", "firefox57", "safari11", "edge16"],
        globalName: "app",
        loader: {
          ".ts": "ts",
          ".json": "json",
        },
      })
    )
    .pipe(gulp.dest("./dist/"))
}

function watch() {
  exec("reload -b --dir=dist --port=5000", (err, stdout) => {
    if (err) throw err
  })
  return gulp.watch("src/**/*.ts", exports.build)
}

exports.build = gulp.series(copy, build)
exports.watch = gulp.series(exports.build, watch)
