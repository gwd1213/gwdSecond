var gulp = require("gulp");
var minifyCss = require('gulp-minify-css');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task("html",function(){
	gulp.src("app/**/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

gulp.task("css",function(){
	gulp.src("app/css/**/*.css")
	.pipe(minifyCss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
});

gulp.task("js", function(){
	gulp.src(["app/**/*.js","!app/libs/*.js"])
//	.pipe(babel({
//		presets: ['@babel/env']
//	}))
//	.pipe(uglify())
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

gulp.task("img",function(){
	gulp.src("app/imgs/**")
	.pipe(gulp.dest("dist/imgs"))
	.pipe(connect.reload());
});

gulp.task("libs",function(){
	gulp.src("app/libs/**")
	.pipe(gulp.dest("dist/libs"))
	.pipe(connect.reload());
});

gulp.task("sass", function(){
	gulp.src("app/sass/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("server", function(){
	connect.server({
		livereload:true,
		port:2333,
		root:"dist"
	})
})

gulp.task("watch", function(){
	gulp.watch("app/**/*.html",["html"]);
	gulp.watch("app/css/**/*.css",["css"]);
	gulp.watch("app/sass/**/*.scss",["sass"]);
	gulp.watch("app/imgs/**",["img"]);
	gulp.watch("app/**/*.js",["js"]);
});

gulp.task("default",["html","css","js","img","sass","libs","watch","server"]);
