
uniform vec3 ambientColor;
uniform float kAmbient;

uniform vec3 diffuseColor;
uniform float kDiffuse;

uniform vec3 specularColor;
uniform float kSpecular;
uniform float shininess;

uniform mat4 modelMatrix;

uniform vec3 spherePosition;

// The value of our shared variable is given as the interpolation between normals computed in the vertex shader
// below we can see the shared variable we passed from the vertex shader using the 'in' classifier
in vec3 interpolatedNormal;
in vec3 viewPosition;
in vec3 worldPosition;

void main() {
    // TODO:
    // HINT: compute the following - light direction, ambient + diffuse + specular component,
    // then set the final color as a combination of these components
    
    // Calculate light direction: basically the direction from the dillo to the sphere
    vec3 lightDirection = normalize(spherePosition - worldPosition);

    // Calculate view direction: just normalize
    vec3 viewDirection = normalize(viewPosition);
    
    // Calculate halfway vector: from lecture notes - h = nromalize(l + v)
    vec3 halfwayDir = normalize(lightDirection + viewDirection);

    // Calculate ambient component
    vec3 ambient = ambientColor * kAmbient;

    // Calculate diffuse component
    float diffuseFactor = max(dot(interpolatedNormal, lightDirection), 0.0);
    vec3 diffuse = diffuseColor * kDiffuse * diffuseFactor;

    // Calculate specular component: ks(max(h.n, 0)^sigma) -> why does this not take into account specular color?
    float specularFactor = pow(max(dot(interpolatedNormal, halfwayDir), 0.0), shininess);
    vec3 specular = specularColor * kSpecular * specularFactor;

    // Calculate final color
    vec3 finalColor = ambient + diffuse + specular;

    // Output final color
    gl_FragColor = vec4(finalColor, 1.0);
}