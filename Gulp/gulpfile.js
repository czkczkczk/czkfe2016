//下面使用的方法，需要从package.json引入进来
var gulp = require('gulp');
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('copy',function(){//配置一个cope任务
    gulp.src("src/index.html").pipe(gulp.dest('dist')).pipe(connect.reload());
    //找到src目录下的文件，通过pipe(管道处理文件)dest(将文件放到指定目录下)dist目录下
    //pipe(connect.reload())实时刷新；
});
gulp.task('copy-img',function(){
    gulp.src('src/images/*.jpg').pipe(gulp.dest('dist/images'));
    //这个找不到子目录里的文件
});
gulp.task('copy-all',function(){
    gulp.src('src/**/*.jpg').pipe(gulp.dest('dist'));
    //这个是全部文件
});
gulp.task('copy-img',function(){
    gulp.src('src/images/*.{png,jpg}').pipe(gulp.dest('dist/images'));
    //这个可以满足png，jpg两个类型
});
gulp.task('copy-jpg',function(){
    gulp.src(['src/**/*.jpg','!src/images/2.jpg']).pipe(gulp.dest('dist'));
    //这个复制文件不包含2.jpg这张图片
});
gulp.task('watch',function(){
    gulp.watch('src/index.html',['copy']);
    gulp.watch('src/sass/*.scss',['sass']);
//监视src/index.html文件，当文件发生变化的时候执行上面定义好的copy任务
});

gulp.task('sass',function(){
   gulp.src('src/sass/style.scss').pipe(sass())
       .pipe(gulp.dest('dist/css')).pipe(connect.reload());
    //通过pipe(sass())执行sass方法
});

//创建一个服务
gulp.task('server',function(){
   connect.server({//server固定
       root:'dist',//根目录名，默认走index.html
       port:8888,//端口号
       livereload:true

   });
});
gulp.task('watch-html',['server','watch']);

gulp.task('concat',function(){
    gulp.src(['src/test1.js','src/test.js'])
        .pipe(concat('main.js')).pipe(gulp.dest('dist/js'))
        .pipe(uglify()).pipe(rename('main.min.js')).pipe(gulp.dest('dist/js'));
    //合并js文件,压缩，并且重命名
});





