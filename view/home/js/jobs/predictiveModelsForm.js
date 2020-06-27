$(document).ready(function() {
  loadData();
  changeItemize();
});
function changeItemize(){
  var option = getQuerystring("opc");
  $('#val3').hide();
  
  $('#validation').change(function(){
    if($('#validation').val() == 0) {
      $('#val1').show();
      $('#val2').show();
      $('#val3').hide();
      
    }
    if($('#validation').val() == 1) {
      $('#val3').show();
      $('#val1').hide();
      $('#val2').hide();
    }
    if($('#validation').val() == 2) {
      $('#val1').show();
      $('#val2').show();
      $('#val3').show();
    }
  });
  if(option == 0) {//prediccion
    $('#p_algorithm').show();
    $('#c_algorithm').hide();   
  }
  if(option == 1) {//clasificacion
    $('#c_algorithm').show();
    $('#p_algorithm').hide();
  }
  $('#algorithm').change(function(){
    
  });
}
function loadData(){
  var user = getQuerystring("user");
  var job = getQuerystring("job");
  



}
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

function getQuerystring(key) {
var url_string = window.location;
var url = new URL(url_string);
var c = url.searchParams.get(key);
return c;
}
function zeroTest(element) {
return element === 0;
}