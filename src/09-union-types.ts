(() => {
  let userID: string | number;
  userID = 1212;
  userID;
  userID = "1212";
  userID;

  function greeting(myText: string | number){
    if(typeof myText === "string"){
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(myText);
    }
  }

  greeting("HOLA");
  greeting(20677);
})();
