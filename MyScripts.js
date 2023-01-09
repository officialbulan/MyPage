console.log("Hello this is an easteregg!"); 
document.addEventListener("DOMContentLoaded", function() {
const downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "./Cv_eng.pdf";
  link.download = "My Resume.pdf";
  link.target = "_blank";
  link.click();
});  });
