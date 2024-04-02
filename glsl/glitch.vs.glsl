// The uniform variable is set up in the javascript code and the same for all vertices
uniform vec3 spherePosition;


// A shared variable is initialized in the vertex shader and attached to the current vertex being processed,
// such that each vertex is given a shared variable and when passed to the fragment shader,
// these values are interpolated between vertices and across fragments,
// below we can see the shared variable is initialized in the vertex shader using the 'out' classifier
out vec3 interpolatedNormal;
out vec3 lightDirection;

void main() {
    // TODO:
    // Compute vertex position, light direction in VCS, and transform the normal to
    // an appropriate frame. Then determine if a vertex lies on the silhouette edge 
    // of the model or not and set `fresnel` appropriately.

    interpolatedNormal = normalize(mat3(transpose(inverse(modelMatrix))) * normal);
    vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    lightDirection = normalize(vec3(viewMatrix * vec4(spherePosition - worldPosition, 0.0)));
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
