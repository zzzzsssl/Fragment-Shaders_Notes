#ifdef GL_ES               // 宏操作，判断运行的环境是否是基于OpenGL ES
precision mediump float;   // 制定着色器的计算精度，主要包括lowp:低精度，mediump:中精度,highp:高精度
#endif                     // 宏结束

// 定义统一变量 u_resolution，{x:画布的宽，y:画布的高}，外部传入，在顶点着色器与片元着色器中都可以访问到
uniform vec2 u_resolution; // 画布尺寸（宽，高）
uniform vec2 u_mouse;      // 鼠标位置（在屏幕上哪个像素）
uniform float u_time;      // 时间（加载后的秒数）

// 类似于C语言， 程序启动的主方法
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy; //对坐标进行了规范化。这样做是为了使所有的值落在屏幕 0.0 到 1.0 之间
    vec3 color = vec3(0.0);                  //定义一个颜色
                                               //gl_FragCoord 这个是当前着色器像素点的位置，是一个vec2值
    gl_FragColor = vec4(color,1.0);            //gl_FragColor 系统变量，获得最终像素点的颜色  
}


/* Functions 函数
有返回值：
float funcA(int a, vec2 b){
    //stuff to do
    return 1.0;
}

无返回值：
void funcB(vec3 vect){
    //stuff to do
    //No return
}
*/


/*
转换区间
原始数值区间是笛卡尔坐标系 x[0 ~ 1], y[0 ~ 1],原点在左下角
当坐标减去一个 vec2(0.5)值 可以转化为x[-0.5, 0.5], y[-0.5, 0.5]，原点在中心
在减去0.5的基础上再乘以2 可以转化为x[-1, 1], y[-1, 1],原点在中心
*/