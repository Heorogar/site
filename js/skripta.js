function validateInput() {
  let forms = document.getElementsByTagName("input");
  let radios = document.getElementsByName(
    "gnu");
  let checkboxes = document.getElementsByName("checkboxes");

  if ((forms.clock.value.toLowerCase() == "cpu" || forms.clock.value.toLowerCase() == "central processing unit") && forms.mephisto.value.toLowerCase() == "documentation" && forms.dungeon.value.toLowerCase() == "linux" && radios[1].checked && checkboxes[0].checked == false && checkboxes[1].checked == false && checkboxes[2].checked && checkboxes[3].checked)
    alert("foo");
}
document.getElementById("submit").addEventListener("click", validateInput);