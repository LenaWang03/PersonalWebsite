// HINT: Don't forget to define the uniforms here after you pass them in in A3.js

uniform vec3 toonColor;
uniform vec3 toonColor2;
uniform vec3 outlineColor;

// The value of our shared variable is given as the interpolation between normals computed in the vertex shader
// below we can see the shared variable we passed from the vertex shader using the 'in' classifier
in vec3 interpolatedNormal;
in vec3 lightDirection;
in vec3 viewPosition;
in float fresnel;

void main() {
    // TODO:
    // HINT: First, compute the light intensity of the current fragment by determining
    // the cosine angle between the surface normal and the light vector. Next, define
    // ranges of light intensity values to shade; you may find GLSL's built-in `ceil`
    // function being useful. Next, define two colors: `toonColor` being a yellow
    // color for brighter areas, and `toonColor2` is a red color for darker areas.
    // Use the light intensity to blend the two colors. Finally, to achieve the toon
    // silhouette outline, set a dark fragment color if the current fragment is located
    // near the edge of the 3D model. Use a reasonable value as the threshold for the
    // silhouette thickness (i.e. proximity to edge).

    // Calculate light intensity: same as previous assignments
    float intensity = dot(normalize(interpolatedNormal), normalize(lightDirection));

    // Define ranges for shading: creates that colour partition
    // ceil = round up to the nearest integer (multipled by 3 to get more shades of colour)
    float toonShade = ceil(intensity * 3.0) / 3.0;

    // Toon silhouette outline
    float outlineThreshold = 0.4;

    vec3 finalColor = mix(toonColor2, toonColor, toonShade);
    if (fresnel < outlineThreshold) {
        finalColor = outlineColor;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}

