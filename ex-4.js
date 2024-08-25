//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
switch (lightBulbStatus) {
    case "On":
        console.log("Light Bulb is On.");
        break;
    case "Off":
        console.log("Light Bulb is Off.");
        break;
    case "Broken":
        lightBulbStatus = "Light bulb is Broken.";
        console.log(lightBulbStatus);
        break;
    default:
        console.log("Please choose the currect input (On/Off/Broken).");
}