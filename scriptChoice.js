// Execute this function when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Show details for Friday by default
  showDetails("friday");
});

function showDetails(day) {
  // Hide all details
  document.getElementById("fridayDetails").style.display = "none";
  document.getElementById("saturdayDetails").style.display = "none";

  // Remove the 'active-tab' class from all tabs
  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.classList.remove("active-tab");
  });

  // Show details for the selected day
  document.getElementById(`${day}Details`).style.display = "block";

  // Add the 'active-tab' class to the selected tab
  document.getElementById(`${day}Tab`).classList.add("active-tab");
}
