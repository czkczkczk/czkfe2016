//����ʹ�õķ�������Ҫ��package.json�������
var gulp = require('gulp');
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('copy',function(){//����һ��cope����
    gulp.src("src/index.html").pipe(gulp.dest('dist')).pipe(connect.reload());
    //�ҵ�srcĿ¼�µ��ļ���ͨ��pipe(�ܵ������ļ�)dest(���ļ��ŵ�ָ��Ŀ¼��)distĿ¼��
    //pipe(connect.reload())ʵʱˢ�£�
});
gulp.task('copy-img',function(){
    gulp.src('src/images/*.jpg').pipe(gulp.dest('dist/images'));
    //����Ҳ�����Ŀ¼����ļ�
});
gulp.task('copy-all',function(){
    gulp.src('src/**/*.jpg').pipe(gulp.dest('dist'));
    //�����ȫ���ļ�
});
gulp.task('copy-img',function(){
    gulp.src('src/images/*.{png,jpg}').pipe(gulp.dest('dist/images'));
    //�����������png��jpg��������
});
gulp.task('copy-jpg',function(){
    gulp.src(['src/**/*.jpg','!src/images/2.jpg']).pipe(gulp.dest('dist'));
    //��������ļ�������2.jpg����ͼƬ
});
gulp.task('watch',function(){
    gulp.watch('src/index.html',['copy']);
    gulp.watch('src/sass/*.scss',['sass']);
//����src/index.html�ļ������ļ������仯��ʱ��ִ�����涨��õ�copy����
});

gulp.task('sass',function(){
   gulp.src('src/sass/style.scss').pipe(sass())
       .pipe(gulp.dest('dist/css')).pipe(connect.reload());
    //ͨ��pipe(sass())ִ��sass����
});

//����һ������
gulp.task('server',function(){
   connect.server({//server�̶�
       root:'dist',//��Ŀ¼����Ĭ����index.html
       port:8888,//�˿ں�
       livereload:true

   });
});
gulp.task('watch-html',['server','watch']);

gulp.task('concat',function(){
    gulp.src(['src/test1.js','src/test.js'])
        .pipe(concat('main.js')).pipe(gulp.dest('dist/js'))
        .pipe(uglify()).pipe(rename('main.min.js')).pipe(gulp.dest('dist/js'));
    //�ϲ�js�ļ�,ѹ��������������
});





