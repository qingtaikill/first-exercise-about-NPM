var gulp = require("gulp");
var gconcat = require("gulp-concat");
var gcssnano = require("gulp-cssnano");
var guglify = require("gulp-uglify");
var ghtmlmin = require("gulp-htmlmin");

gulp.task("css",function(){
	gulp.src(["./index.css","./index1.css","./index2.css"])
	.pipe(gconcat("jsl.css"))
	.pipe(gcssnano())
	.pipe(gulp.dest("./css"))
})



gulp.task("js",function(){
	gulp.src("./index.js")
	.pipe(gconcat("jsl.js"))
	.pipe(guglify())
	.pipe(gulp.dest("./js"))
})