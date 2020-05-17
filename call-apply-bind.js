var testObject = {
    prop2: "this for test object",
    funcProp: function (param1, param2) {
        console.log(this.prop2 + ": " + param1 + param2);
    }
}

testObject.funcProp("testObject", "param2");

var callObject = {
    prop2: "this for call object"
}

var applyObject = {
    prop2: "this for apply object"
}

/**
 * we use .call() to make the "this" to point to another provided object
 *
 * Calls a method of an object, substituting another object for the current object.
 * @param thisArg — The object to be used as the current object.
 * @param argArray — A list of arguments to be passed to the method.
 */
testObject.funcProp.call(callObject, "call", "ing");

/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg — The object to be used as the this object.
 * @param argArray — A set of arguments to be passed to the function.
 */
testObject.funcProp.apply(applyObject, ["app", "lying"]); //same thing but sends the params as an array, funciton should also be accepting a array also? 

/**
 * Does the same thing but Bind doesn't immediately calls the function, instead it generates a copy of the function. So that we can store it somewhere.
 * that can extremely be usefull to create funciton wiht preset arguements.
 * 
 * For a given function, creates a bound function that has the same body as the original function. 
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 * @param thisArg — An object to which the this keyword can refer inside the new function.
 * @param argArray — A list of arguments to be passed to the new function.
 */
var storedPresetFunction = testObject.funcProp.bind(testObject, "bind");
//at this point we created a function with param1 is already preset and now we have only 1 parameter to send to call the stored function
storedPresetFunction("ing");