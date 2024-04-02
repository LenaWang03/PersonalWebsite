// // HINT: Don't forget to define the uniforms here after you pass them in in A3.js
// // The value of our shared variable is given as the interpolation between normals computed in the vertex shader
// // below we can see the shared variable we passed from the vertex shader using the 'in' classifier
in vec3 interpolatedNormal;
in vec3 lightDirection;

void main() {
    // Compute light intensity
    float lightIntensity = dot(interpolatedNormal, lightDirection);

    // Assign colors based on light intensity (heat map)
    vec3 color;
    if (lightIntensity < 0.2) {
        color = vec3(0.0, 0.0, 1.0); // Blue
    } else if (lightIntensity < 0.4) {
        color = vec3(0.0, 1.0, 0.0); // Green
    } else if (lightIntensity < 0.6) {
        color = vec3(1.0, 1.0, 0.0); // Yellow
    } else if (lightIntensity < 0.8) {
        color = vec3(1.0, 0.5, 0.0); // Orange
    } else {
        color = vec3(1.0, 0.0, 0.0); // Red
    }

    // Set final rendered color
    gl_FragColor = vec4(color, 1.0);
}

