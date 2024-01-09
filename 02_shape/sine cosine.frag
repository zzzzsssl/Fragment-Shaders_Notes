#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    // 定义一个平移向量,平移圆心的范围是[-1,1]
    // x轴，负数:向右移动 正数：向左移动
    // y轴，负数:向上移动，正数：向下移动
    // 使用sin cos,值除以10，速度就会减慢
    vec2 translate = vec2(sin(u_time / 1.0), cos(u_time)); //加入translate二维向量 可以控制圆的位置

    position = position + translate * 0.5; // or// position += translate * 0.5;

    color = color + vec3(circleshape(position, 0.2)); //or// color += vec3(circleshape(position, 0.3));

    gl_FragColor = vec4(color, 1.0);
}