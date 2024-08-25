//Exercise 2
let lightBulbStatus = "On";

// Start coding here.
if (lightBulbStatus === "On") {
    console.log("Light bulb is On.");
} else if (lightBulbStatus === "Off") {
    console.log("Light bulb is Off.");
} else if (lightBulbStatus === "Broken") {
    lightBulbStatus = "Light bulb is Broken.";
    console.log(lightBulbStatus);
} else {
    console.log("Please choose the currect input (On/Off/Broken)");
}
