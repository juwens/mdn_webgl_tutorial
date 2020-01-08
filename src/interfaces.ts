interface ibuffers {
    position : WebGLBuffer;
}

interface iprogramInfo {
    program : WebGLProgram;
    attribLocations: {
        vertexPosition: number;
    };
    uniformLocations: {
        projectionMatrix: WebGLUniformLocation;
        modelViewMatrix: WebGLUniformLocation;
    };
}

export {
    ibuffers, iprogramInfo
}