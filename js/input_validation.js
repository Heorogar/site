/*jshint esversion: 8 */
function validateInput() {
  let forms = document.getElementsByTagName("input");
  let radios = document.getElementsByName(
    "gnu");
  let checkboxes = document.getElementsByName("runtime");

  let storage = {
    clock: forms.clock.value.toLowerCase(),
    mephisto: forms.mephisto.value.toLowerCase(),
    dungeon: forms.dungeon.value.toLowerCase(),
    js: radios[1].checked,
    executable: checkboxes[0].checked,
    binary: checkboxes[1].checked,
    binary_fool: checkboxes[2].checked,
    environment: checkboxes[3].checked
  };

  localStorage.setItem("json", JSON.stringify(storage));

  if ((storage.clock == "cpu" || storage.clock == "central processing unit") && storage.mephisto == "documentation" && storage.dungeon == "linux" && storage.js && storage.executable == false && storage.binary == false && storage.binary_fool && storage.environment) {
    $('p').hide();
    $('#riddle_submit').hide();
    $("#riddle_knight").show();
    $("#riddle_reward").show();
    $('html').animate({
      scrollTop: 0
    }, 5000);
  } else
    alert("Wrong thou art, try thee again!");
}

document.getElementById("riddle_submit").addEventListener("click", validateInput);

$(document).ready(function() {
  $("#riddle_reward").hide();
  $("#riddle_knight").hide();
});