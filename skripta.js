function validateInput(){
  let forms=document.getElementsByTagName("input");
  document.write('foo');
  if(forms[2].value="cpu")
  alert("foo");
}
document.getElementById('submit').addEventListener('click',validateInput);
