// buffer first contains path to .wasm file.  wasmInjector replaces path with contents of .wasm file.var buffer = new Uint8Array([0,97,115,109,1,0,0,0,1,140,128,128,128,0,2,96,2,124,124,1,124,96,1,124,1,124,3,134,128,128,128,0,5,0,0,0,0,1,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,182,128,128,128,0,6,6,109,101,109,111,114,121,2,0,3,97,100,100,0,0,8,109,117,108,116,105,112,108,121,0,1,6,100,105,118,105,100,101,0,2,8,115,117,98,116,114,97,99,116,0,3,4,97,100,100,53,0,4,10,196,128,128,128,0,5,135,128,128,128,0,0,32,0,32,1,160,11,135,128,128,128,0,0,32,0,32,1,162,11,135,128,128,128,0,0,32,0,32,1,163,11,135,128,128,128,0,0,32,0,32,1,161,11,142,128,128,128,0,0,32,0,68,0,0,0,0,0,0,20,64,160,11]);var m = new WebAssembly.Instance(new WebAssembly.Module(buffer));var ex = m.exports;// arguments from executeJS call arrive here as global variables called// input1 through inputnvar returnObject = {    // return values should be labeled return1 through returnn    return1: ex.add(input1, input2),    return2: ex.subtract(input1, input2),    return3: ex.multiply(input1, input2),    return4: ex.divide(input1, input2),}returnObject;
