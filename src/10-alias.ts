(() => {
  type UserID = string | number | boolean;

  let userID: string | number;

  // Literal types
  type Sizes = "S" | "M" | "L" | "XL";
  let shirtSize: Sizes;
  shirtSize = "S";
  shirtSize = "M";
  shirtSize = "L";
  shirtSize = "XL";
  //No esta dentro del tipado Da error
  ///shirtSize = "Z";

  function greeting(userID: UserID, shirtSize: Sizes ){
    if(typeof userID === "string"){
      console.log(`string ${userID.toLowerCase()}`);
    }
  }

  greeting(11, "S");
  greeting("Talle", "L");
})();
