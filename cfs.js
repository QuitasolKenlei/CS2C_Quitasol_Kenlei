//password = "Password123BSCS"
let name = "Quitasol, Kenlei A.";
let address = "Quinabalayangan Sta. Lucia Ilocos Sur";
let age = 20;
let classRole = "Student";

const COURSE = "BSCS";

if (COURSE === "BSCS") {

  if (classRole === "Student") {
    let password = prompt("Enter your password:");
    if (password.length >= 12 && password.includes(COURSE)) {
      console.log("Name:", name);
      console.log("Address:");
      for (let i = 0; i < age; i++) {
        console.log(address);
      }
    } else {
      console.log("Password does not meet the requirements.");
    }
  } else {
    console.log("Invalid class role.");
  }
} else {
  console.log("Invalid course.");
}
