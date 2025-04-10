/**
 * ! dont use any
 */

(() => {
    let myDynamicVar: any;

    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = 'Hola soy cualquier cosa';

    console.log(myDynamicVar)
})();
