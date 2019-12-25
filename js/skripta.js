function validateInput() {
  let forms = document.getElementsByTagName("input");
  let radios = document.getElementsByName(
    "gnu");
  let checkboxes = document.getElementsByName("checkboxes");

  if ((forms.clock.value.toLowerCase() == "cpu" || forms.clock.value.toLowerCase() == "central processing unit") && forms.mephisto.value.toLowerCase() == "documentation" && forms.dungeon.value.toLowerCase() == "linux" && radios[1].checked && checkboxes[0].checked == false && checkboxes[1].checked == false && checkboxes[2].checked && checkboxes[3].checked) {
    $('p').hide();
    $('#submit').hide();
    $("#knight").show();
    $("#reward").show();
    $('html').animate({
      scrollTop: 0
    }, 5000);
  } else
    alert("Wrong thou art, try thee again!");
}
document.getElementById("submit").addEventListener("click", validateInput);
$(document).ready(function() {
  $("#reward").hide();
  $("#knight").hide();
});