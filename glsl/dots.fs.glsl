uniform float ticks;

// The value of our shared variable is given as the interpolation between normals computed in the vertex shader
// below we can see the shared variable we passed from the vertex shader using the 'in' classifier
in vec3 interpolatedNormal;
in vec3 lightDirection;
in vec3 vertexPosition;

void main() {
    // TODO:
    // HINT: First, as you've already done in the Toon fragment shader, compute the light
    // intensity of the current fragment by determining the cosine angle between the surface
    // normal and the light vector. Next, pick any two colors, blend them based on light
    // intensity to give the 3D model some color and depth. Also make the color change wrt tick.
    // Next, implement rolling dots using the mod function, tick and discard.
    float intensity = dot(interpolatedNormal, lightDirection);

    float colorFactor = sin(ticks); 
    vec3 color1 = vec3(1.0, 0.0, 0.85); 
    vec3 color2 = vec3(0.0, 0.0, 1.0); 
    vec3 finalColor = mix(color1, color2, colorFactor);
    
    float dotSize = 0.1;
    
    float offset = ticks * 0.5; 
    vec3 gridPosition = mod(vertexPosition - vec3(0.0, 0.0, offset), dotSize);
    float distanceFromCenter = length(gridPosition - dotSize * 0.4);
    if (distanceFromCenter > dotSize * 0.4) discard;

    // HINT: Set final rendered colour
    gl_FragColor = vec4(finalColor, 1.0);
}