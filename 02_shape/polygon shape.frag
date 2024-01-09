#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.14159265359; // or #define PI 3.1415926535
uniform vec2 u_resolution;

float polygonshape(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y); //atan — 返回参数的反正切值 // atan的取值范围是[-pi/2,pi/2]
    float slice = PI * 2.0 / sides;  //360 度 = 2 * PI 弧度。因此，将圆除以边数以获得每个切片的弧度

    return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}
    // floor 向下取整,floor(0.5 + angle / slice)返回的结果是[0,2]
    //floor(0.5 + angle / slice) * slice - angle):这是圆的角度，所以两边是平的
    // cos( ^^ this stuff ^^ * length(position)):沿角度到中心的距离
    // step(radius, ^^^ this stuff ^^^):使边缘变得锐利并定义半径

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    float polygon = polygonshape(position, 0.6, 6.0);

    color = vec3(polygon);

    gl_FragColor = vec4(color, 1.0);
    
}

