function downloadPDF() {
  const downloadURL = "assets/resume.pdf";
  const link = document.createElement("a");
  link.href = downloadURL;
  link.download = "zach-mutch-resume.pdf";
  link.click();
}
