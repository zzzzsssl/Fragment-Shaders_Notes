#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(0.0, 0.0); //加入translate二维向量 可以控制圆的位置

    position = position + translate * 0.5; // or// position += translate * 0.5;

    color = color + vec3(circleshape(position, 0.25)); //or// color += vec3(circleshape(position, 0.3));//把黑色赋给circleshape

    gl_FragColor = vec4(color, 1.0);
}