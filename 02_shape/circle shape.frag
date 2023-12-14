#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleshape(vec2 position, float radius){   //圆形函数
    return step(radius, length(position - vec2(0.5))); //当坐标减去 vec2(0.5) 是为了让圆形中心在画面正中央
}                                                 //length() 内置函数


void main (){
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    float circle = circleshape(position, 0.20);  //修改圆形具体的半径大小
    color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}