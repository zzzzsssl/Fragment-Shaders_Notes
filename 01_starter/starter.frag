#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // 画布尺寸（宽，高）
uniform vec2 u_mouse; // 鼠标位置（在屏幕上哪个像素）
uniform float u_time; // 时间（加载后的秒数）

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy; //对坐标进行了规范化。这样做是为了使所有的值落在 0.0 到 1.0 之间，这样就可以轻松把 X 或 Y 的值映射到红色或者绿色通道。
    vec3 color = vec3(0.0);

    gl_FragColor = vec4(color,1.0); 
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