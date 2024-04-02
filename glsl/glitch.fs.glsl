in vec3 interpolatedNormal;
in vec3 lightDirection;

void main() {
    // Generate a random value for each fragment
    float randomValue = fract(sin(gl_FragCoord.x * 12.9898 + gl_FragCoord.y * 78.233) * 43758.5453);

    // Apply glitch effect based on random value and intensity
    float lightIntensity = dot(interpolatedNormal, lightDirection);
     vec3 finalColor;
    if (randomValue < 0.33) {
        // Glitch with the red color channel
        finalColor = vec3(1.0, 0.0, 0.0);
    } else if (randomValue < 0.66) {
        // Glitch with the green color channel
        finalColor = vec3(0.0, 1.0, 0.0);
    } else {
        // Glitch with the blue color channel
        finalColor = vec3(0.0, 0.0, 1.0);
    }

    // Set final rendered color
    gl_FragColor = vec4(lightIntensity*finalColor, 1.0);
}