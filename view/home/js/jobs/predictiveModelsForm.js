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

    $('#p_AdaBoostRegressor_1').show();   
    $('#p_AdaBoostRegressor_2').show(); 
    $('#p_BaggingRegressor_1').hide();   
    $('#p_BaggingRegressor_2').hide();   
    $('#p_DecisionTree_1').hide();   
    $('#p_DecisionTree_2').hide(); 
    $('#p_GradientBoostingRegressor_1').hide(); 
    $('#p_GradientBoostingRegressor_2').hide(); 
    $('#p_GradientBoostingRegressor_3').hide(); 
    $('#p_GradientBoostingRegressor_4').hide(); 
    $('#p_GradientBoostingRegressor_5').hide(); 
    $('#p_KNeighborsRegressor_1').hide(); 
    $('#p_KNeighborsRegressor_2').hide(); 
    $('#p_KNeighborsRegressor_3').hide(); 
    $('#p_KNeighborsRegressor_4').hide(); 
    $('#p_MLPRegressor_1').hide(); 
    $('#p_MLPRegressor_2').hide(); 
    $('#p_MLPRegressor_3').hide(); 
    $('#p_MLPRegressor_4').hide(); 
    $('#p_MLPRegressor_5').hide(); 
    $('#p_MLPRegressor_6').hide(); 
    $('#p_MLPRegressor_7').hide(); 
    $('#p_MLPRegressor_8').hide(); 
    $('#p_MLPRegressor_9').hide(); 
    $('#p_NuSVR_1').hide(); 
    $('#p_NuSVR_2').hide(); 
    $('#p_NuSVR_3').hide(); 
    $('#p_NuSVR_4').hide(); 
    $('#p_RandomForestRegressor_1').hide(); 
    $('#p_RandomForestRegressor_2').hide(); 
    $('#p_RandomForestRegressor_3').hide(); 
    $('#p_RandomForestRegressor_4').hide(); 
    $('#p_RandomForestRegressor_5').hide(); 
    $('#p_SVR_1').hide();
    $('#p_SVR_2').hide();
    $('#p_SVR_3').hide();
    
    

    $('#p_algorithm_s').change(function(){
      if($('#p_algorithm_s').val() == 0) {//prediccion p_AdaBoostRegressor
        $('#p_AdaBoostRegressor_1').show();   
        $('#p_AdaBoostRegressor_2').show(); 
        $('#p_BaggingRegressor_1').hide();   
        $('#p_BaggingRegressor_2').hide();   
        $('#p_DecisionTree_1').hide();   
        $('#p_DecisionTree_2').hide(); 
        $('#p_GradientBoostingRegressor_1').hide(); 
        $('#p_GradientBoostingRegressor_2').hide(); 
        $('#p_GradientBoostingRegressor_3').hide(); 
        $('#p_GradientBoostingRegressor_4').hide(); 
        $('#p_GradientBoostingRegressor_5').hide(); 
        $('#p_KNeighborsRegressor_1').hide(); 
        $('#p_KNeighborsRegressor_2').hide(); 
        $('#p_KNeighborsRegressor_3').hide(); 
        $('#p_KNeighborsRegressor_4').hide(); 
        $('#p_MLPRegressor_1').hide(); 
        $('#p_MLPRegressor_2').hide(); 
        $('#p_MLPRegressor_3').hide(); 
        $('#p_MLPRegressor_4').hide(); 
        $('#p_MLPRegressor_5').hide(); 
        $('#p_MLPRegressor_6').hide(); 
        $('#p_MLPRegressor_7').hide(); 
        $('#p_MLPRegressor_8').hide(); 
        $('#p_MLPRegressor_9').hide(); 
        $('#p_NuSVR_1').hide(); 
        $('#p_NuSVR_2').hide(); 
        $('#p_NuSVR_3').hide(); 
        $('#p_NuSVR_4').hide(); 
        $('#p_RandomForestRegressor_1').hide(); 
        $('#p_RandomForestRegressor_2').hide(); 
        $('#p_RandomForestRegressor_3').hide(); 
        $('#p_RandomForestRegressor_4').hide(); 
        $('#p_RandomForestRegressor_5').hide(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
      }
      if($('#p_algorithm_s').val() == 1) {//prediccion p_BaggingRegressor
        $('#p_AdaBoostRegressor_1').hide();   
        $('#p_AdaBoostRegressor_2').hide(); 
        $('#p_BaggingRegressor_1').show();   
        $('#p_BaggingRegressor_2').show();   
        $('#p_DecisionTree_1').hide();   
        $('#p_DecisionTree_2').hide(); 
        $('#p_GradientBoostingRegressor_1').hide(); 
        $('#p_GradientBoostingRegressor_2').hide(); 
        $('#p_GradientBoostingRegressor_3').hide(); 
        $('#p_GradientBoostingRegressor_4').hide(); 
        $('#p_GradientBoostingRegressor_5').hide(); 
        $('#p_KNeighborsRegressor_1').hide(); 
        $('#p_KNeighborsRegressor_2').hide(); 
        $('#p_KNeighborsRegressor_3').hide(); 
        $('#p_KNeighborsRegressor_4').hide(); 
        $('#p_MLPRegressor_1').hide(); 
        $('#p_MLPRegressor_2').hide(); 
        $('#p_MLPRegressor_3').hide(); 
        $('#p_MLPRegressor_4').hide(); 
        $('#p_MLPRegressor_5').hide(); 
        $('#p_MLPRegressor_6').hide(); 
        $('#p_MLPRegressor_7').hide(); 
        $('#p_MLPRegressor_8').hide(); 
        $('#p_MLPRegressor_9').hide(); 
        $('#p_NuSVR_1').hide(); 
        $('#p_NuSVR_2').hide(); 
        $('#p_NuSVR_3').hide(); 
        $('#p_NuSVR_4').hide(); 
        $('#p_RandomForestRegressor_1').hide(); 
        $('#p_RandomForestRegressor_2').hide(); 
        $('#p_RandomForestRegressor_3').hide(); 
        $('#p_RandomForestRegressor_4').hide(); 
        $('#p_RandomForestRegressor_5').hide(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
      }
      if($('#p_algorithm_s').val() == 2) {//prediccion p_DecisionTree
        $('#p_AdaBoostRegressor_1').hide();   
        $('#p_AdaBoostRegressor_2').hide(); 
        $('#p_BaggingRegressor_1').hide();   
        $('#p_BaggingRegressor_2').hide();   
        $('#p_DecisionTree_1').show();   
        $('#p_DecisionTree_2').show(); 
        $('#p_GradientBoostingRegressor_1').hide(); 
        $('#p_GradientBoostingRegressor_2').hide(); 
        $('#p_GradientBoostingRegressor_3').hide(); 
        $('#p_GradientBoostingRegressor_4').hide(); 
        $('#p_GradientBoostingRegressor_5').hide(); 
        $('#p_KNeighborsRegressor_1').hide(); 
        $('#p_KNeighborsRegressor_2').hide(); 
        $('#p_KNeighborsRegressor_3').hide(); 
        $('#p_KNeighborsRegressor_4').hide(); 
        $('#p_MLPRegressor_1').hide(); 
        $('#p_MLPRegressor_2').hide(); 
        $('#p_MLPRegressor_3').hide(); 
        $('#p_MLPRegressor_4').hide(); 
        $('#p_MLPRegressor_5').hide(); 
        $('#p_MLPRegressor_6').hide(); 
        $('#p_MLPRegressor_7').hide(); 
        $('#p_MLPRegressor_8').hide(); 
        $('#p_MLPRegressor_9').hide(); 
        $('#p_NuSVR_1').hide(); 
        $('#p_NuSVR_2').hide(); 
        $('#p_NuSVR_3').hide(); 
        $('#p_NuSVR_4').hide(); 
        $('#p_RandomForestRegressor_1').hide(); 
        $('#p_RandomForestRegressor_2').hide(); 
        $('#p_RandomForestRegressor_3').hide(); 
        $('#p_RandomForestRegressor_4').hide(); 
        $('#p_RandomForestRegressor_5').hide(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
      }
      if($('#p_algorithm_s').val() == 3) {//prediccion p_GradientBoostingRegressor
        $('#p_AdaBoostRegressor_1').hide();   
        $('#p_AdaBoostRegressor_2').hide(); 
        $('#p_BaggingRegressor_1').hide();   
        $('#p_BaggingRegressor_2').hide();   
        $('#p_DecisionTree_1').hide();   
        $('#p_DecisionTree_2').hide(); 
        $('#p_GradientBoostingRegressor_1').show(); 
        $('#p_GradientBoostingRegressor_2').show(); 
        $('#p_GradientBoostingRegressor_3').show(); 
        $('#p_GradientBoostingRegressor_4').show(); 
        $('#p_GradientBoostingRegressor_5').show(); 
        $('#p_KNeighborsRegressor_1').hide(); 
        $('#p_KNeighborsRegressor_2').hide(); 
        $('#p_KNeighborsRegressor_3').hide(); 
        $('#p_KNeighborsRegressor_4').hide(); 
        $('#p_MLPRegressor_1').hide(); 
        $('#p_MLPRegressor_2').hide(); 
        $('#p_MLPRegressor_3').hide(); 
        $('#p_MLPRegressor_4').hide(); 
        $('#p_MLPRegressor_5').hide(); 
        $('#p_MLPRegressor_6').hide(); 
        $('#p_MLPRegressor_7').hide(); 
        $('#p_MLPRegressor_8').hide(); 
        $('#p_MLPRegressor_9').hide(); 
        $('#p_NuSVR_1').hide(); 
        $('#p_NuSVR_2').hide(); 
        $('#p_NuSVR_3').hide(); 
        $('#p_NuSVR_4').hide(); 
        $('#p_RandomForestRegressor_1').hide(); 
        $('#p_RandomForestRegressor_2').hide(); 
        $('#p_RandomForestRegressor_3').hide(); 
        $('#p_RandomForestRegressor_4').hide(); 
        $('#p_RandomForestRegressor_5').hide(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
      }
      if($('#p_algorithm_s').val() == 4) {//prediccion p_KNeighborsRegressor
        $('#p_AdaBoostRegressor_1').hide();   
        $('#p_AdaBoostRegressor_2').hide(); 
        $('#p_BaggingRegressor_1').hide();   
        $('#p_BaggingRegressor_2').hide();   
        $('#p_DecisionTree_1').hide();   
        $('#p_DecisionTree_2').hide(); 
        $('#p_GradientBoostingRegressor_1').hide(); 
        $('#p_GradientBoostingRegressor_2').hide(); 
        $('#p_GradientBoostingRegressor_3').hide(); 
        $('#p_GradientBoostingRegressor_4').hide(); 
        $('#p_GradientBoostingRegressor_5').hide(); 
        $('#p_KNeighborsRegressor_1').show(); 
        $('#p_KNeighborsRegressor_2').show(); 
        $('#p_KNeighborsRegressor_3').show(); 
        $('#p_KNeighborsRegressor_4').show(); 
        $('#p_MLPRegressor_1').hide(); 
        $('#p_MLPRegressor_2').hide(); 
        $('#p_MLPRegressor_3').hide(); 
        $('#p_MLPRegressor_4').hide(); 
        $('#p_MLPRegressor_5').hide(); 
        $('#p_MLPRegressor_6').hide(); 
        $('#p_MLPRegressor_7').hide(); 
        $('#p_MLPRegressor_8').hide(); 
        $('#p_MLPRegressor_9').hide(); 
        $('#p_NuSVR_1').hide(); 
        $('#p_NuSVR_2').hide(); 
        $('#p_NuSVR_3').hide(); 
        $('#p_NuSVR_4').hide(); 
        $('#p_RandomForestRegressor_1').hide(); 
        $('#p_RandomForestRegressor_2').hide(); 
        $('#p_RandomForestRegressor_3').hide(); 
        $('#p_RandomForestRegressor_4').hide(); 
        $('#p_RandomForestRegressor_5').hide(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
        var min = 2,
        max = 50,
        select = document.getElementById('Neighbors');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }
      }
      if($('#p_algorithm_s').val() == 5) {//prediccion p_MLPRegressor
        $('#p_AdaBoostRegressor_1').hide();   
        $('#p_AdaBoostRegressor_2').hide(); 
        $('#p_BaggingRegressor_1').hide();   
        $('#p_BaggingRegressor_2').hide();   
        $('#p_DecisionTree_1').hide();   
        $('#p_DecisionTree_2').hide(); 
        $('#p_GradientBoostingRegressor_1').hide(); 
        $('#p_GradientBoostingRegressor_2').hide(); 
        $('#p_GradientBoostingRegressor_3').hide(); 
        $('#p_GradientBoostingRegressor_4').hide(); 
        $('#p_GradientBoostingRegressor_5').hide(); 
        $('#p_KNeighborsRegressor_1').hide(); 
        $('#p_KNeighborsRegressor_2').hide(); 
        $('#p_KNeighborsRegressor_3').hide(); 
        $('#p_KNeighborsRegressor_4').hide(); 
        $('#p_MLPRegressor_1').show(); 
        $('#p_MLPRegressor_2').show(); 
        $('#p_MLPRegressor_3').show(); 
        $('#p_MLPRegressor_4').show(); 
        $('#p_MLPRegressor_5').show(); 
        $('#p_MLPRegressor_6').show(); 
        $('#p_MLPRegressor_7').show(); 
        $('#p_MLPRegressor_8').show(); 
        $('#p_MLPRegressor_9').show(); 
        $('#p_NuSVR_1').hide(); 
        $('#p_NuSVR_2').hide(); 
        $('#p_NuSVR_3').hide(); 
        $('#p_NuSVR_4').hide(); 
        $('#p_RandomForestRegressor_1').hide(); 
        $('#p_RandomForestRegressor_2').hide(); 
        $('#p_RandomForestRegressor_3').hide(); 
        $('#p_RandomForestRegressor_4').hide(); 
        $('#p_RandomForestRegressor_5').hide(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();

        var min = 2,
        max = 50,
        m_min = 100,
        m_max = 5000,

        select = document.getElementById('Hidden_Layer_A');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }

        select = document.getElementById('Hidden_Layer_B');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }

        select = document.getElementById('Hidden_Layer_C');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }

        select = document.getElementById('Max_Iterations');

        for (var i = m_min; i<=m_max; i+=50){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }
      }
      if($('#p_algorithm_s').val() == 6) {//prediccion p_NuSVR
        $('#p_AdaBoostRegressor_1').hide();   
        $('#p_AdaBoostRegressor_2').hide(); 
        $('#p_BaggingRegressor_1').hide();   
        $('#p_BaggingRegressor_2').hide();   
        $('#p_DecisionTree_1').hide();   
        $('#p_DecisionTree_2').hide(); 
        $('#p_GradientBoostingRegressor_1').hide(); 
        $('#p_GradientBoostingRegressor_2').hide(); 
        $('#p_GradientBoostingRegressor_3').hide(); 
        $('#p_GradientBoostingRegressor_4').hide(); 
        $('#p_GradientBoostingRegressor_5').hide(); 
        $('#p_KNeighborsRegressor_1').hide(); 
        $('#p_KNeighborsRegressor_2').hide(); 
        $('#p_KNeighborsRegressor_3').hide(); 
        $('#p_KNeighborsRegressor_4').hide(); 
        $('#p_MLPRegressor_1').hide(); 
        $('#p_MLPRegressor_2').hide(); 
        $('#p_MLPRegressor_3').hide(); 
        $('#p_MLPRegressor_4').hide(); 
        $('#p_MLPRegressor_5').hide(); 
        $('#p_MLPRegressor_6').hide(); 
        $('#p_MLPRegressor_7').hide(); 
        $('#p_MLPRegressor_8').hide(); 
        $('#p_MLPRegressor_9').hide(); 
        $('#p_NuSVR_1').show(); 
        $('#p_NuSVR_2').show(); 
        $('#p_NuSVR_3').show(); 
        $('#p_NuSVR_4').show(); 
        $('#p_RandomForestRegressor_1').hide(); 
        $('#p_RandomForestRegressor_2').hide(); 
        $('#p_RandomForestRegressor_3').hide(); 
        $('#p_RandomForestRegressor_4').hide(); 
        $('#p_RandomForestRegressor_5').hide(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
      }
      if($('#p_algorithm_s').val() == 7) {//prediccion p_RandomForestRegressor
        $('#p_AdaBoostRegressor_1').hide();   
        $('#p_AdaBoostRegressor_2').hide(); 
        $('#p_BaggingRegressor_1').hide();   
        $('#p_BaggingRegressor_2').hide();   
        $('#p_DecisionTree_1').hide();   
        $('#p_DecisionTree_2').hide(); 
        $('#p_GradientBoostingRegressor_1').hide(); 
        $('#p_GradientBoostingRegressor_2').hide(); 
        $('#p_GradientBoostingRegressor_3').hide(); 
        $('#p_GradientBoostingRegressor_4').hide(); 
        $('#p_GradientBoostingRegressor_5').hide(); 
        $('#p_KNeighborsRegressor_1').hide(); 
        $('#p_KNeighborsRegressor_2').hide(); 
        $('#p_KNeighborsRegressor_3').hide(); 
        $('#p_KNeighborsRegressor_4').hide(); 
        $('#p_MLPRegressor_1').hide(); 
        $('#p_MLPRegressor_2').hide(); 
        $('#p_MLPRegressor_3').hide(); 
        $('#p_MLPRegressor_4').hide(); 
        $('#p_MLPRegressor_5').hide(); 
        $('#p_MLPRegressor_6').hide(); 
        $('#p_MLPRegressor_7').hide(); 
        $('#p_MLPRegressor_8').hide(); 
        $('#p_MLPRegressor_9').hide(); 
        $('#p_NuSVR_1').hide(); 
        $('#p_NuSVR_2').hide(); 
        $('#p_NuSVR_3').hide(); 
        $('#p_NuSVR_4').hide(); 
        $('#p_RandomForestRegressor_1').show(); 
        $('#p_RandomForestRegressor_2').show(); 
        $('#p_RandomForestRegressor_3').show(); 
        $('#p_RandomForestRegressor_4').show(); 
        $('#p_RandomForestRegressor_5').show(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
        var min = 2,
        max = 2000,
        select = document.getElementById('N_Estimators');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }
      }
      if($('#p_algorithm_s').val() == 8) {//prediccion p_SVR
        $('#p_AdaBoostRegressor_1').hide();   
        $('#p_AdaBoostRegressor_2').hide(); 
        $('#p_BaggingRegressor_1').hide();   
        $('#p_BaggingRegressor_2').hide();   
        $('#p_DecisionTree_1').hide();   
        $('#p_DecisionTree_2').hide(); 
        $('#p_GradientBoostingRegressor_1').hide(); 
        $('#p_GradientBoostingRegressor_2').hide(); 
        $('#p_GradientBoostingRegressor_3').hide(); 
        $('#p_GradientBoostingRegressor_4').hide(); 
        $('#p_GradientBoostingRegressor_5').hide(); 
        $('#p_KNeighborsRegressor_1').hide(); 
        $('#p_KNeighborsRegressor_2').hide(); 
        $('#p_KNeighborsRegressor_3').hide(); 
        $('#p_KNeighborsRegressor_4').hide(); 
        $('#p_MLPRegressor_1').hide(); 
        $('#p_MLPRegressor_2').hide(); 
        $('#p_MLPRegressor_3').hide(); 
        $('#p_MLPRegressor_4').hide(); 
        $('#p_MLPRegressor_5').hide(); 
        $('#p_MLPRegressor_6').hide(); 
        $('#p_MLPRegressor_7').hide(); 
        $('#p_MLPRegressor_8').hide(); 
        $('#p_MLPRegressor_9').hide(); 
        $('#p_NuSVR_1').hide(); 
        $('#p_NuSVR_2').hide(); 
        $('#p_NuSVR_3').hide(); 
        $('#p_NuSVR_4').hide(); 
        $('#p_RandomForestRegressor_1').hide(); 
        $('#p_RandomForestRegressor_2').hide(); 
        $('#p_RandomForestRegressor_3').hide(); 
        $('#p_RandomForestRegressor_4').hide(); 
        $('#p_RandomForestRegressor_5').hide(); 
        $('#p_SVR_1').show();
        $('#p_SVR_2').show();
        $('#p_SVR_3').show();
      }
      
    });
  }



  if(option == 1) {//clasificacion
    $('#c_algorithm').show();
    $('#p_algorithm').hide();

    
  }
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