const fs = require("fs");

var homepage = "";

switch (process.env.WEBHOST) {
  case "ghp":
    homepage = "https://dyordsabuzo.github.io/sample-ghp";
    break;
  case "firebase":
    homepage = "https://sample-firebase-project-cdc5e.web.app";
    break;
  default:
    break;
}

fs.readFile("package.json", "utf8", (error, data) => {
  if (error) {
    console.log(`Error in reading package.json: ${error}`);
    return;
  }

  var jsonData = JSON.parse(data);
  jsonData.homepage = homepage;
  fs.writeFileSync("package.json", JSON.stringify(jsonData, null, 2));
});
