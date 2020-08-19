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
  $('#models').change(function(){
    if($('#models').val() == 0) {
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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
        }
      }
      if(option == 1) {//clasificacion
        $('#p_algorithm').hide();
        $('#c_algorithm').show();   
    
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
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
    
        $('#c_validation').show();
        $('#c_AdaBoostClassifier_1').show();
        $('#c_AdaBoostClassifier_2').show();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      
    }
    if($('#models').val() == 1) {
      $("#p_algorithm_s").val("0").change();
      $("#c_algorithm_s").val("0").change();

      $('#p_algorithm').hide();
      $('#c_algorithm').hide();   

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
      $('#p_SVR_1').hide();
      $('#p_SVR_2').hide();
      $('#p_SVR_3').hide();

      $('#c_validation').hide();
      $('#c_AdaBoostClassifier_1').hide();
      $('#c_AdaBoostClassifier_2').hide();
      $('#c_BaggingClassifier_1').hide();
      $('#c_BaggingClassifier_2').hide();
      $('#c_DecisionTree_1').hide();
      $('#c_DecisionTree_2').hide();
      $('#c_GradientBoostingClassifier_1').hide();
      $('#c_GradientBoostingClassifier_2').hide();
      $('#c_GradientBoostingClassifier_3').hide();
      $('#c_GradientBoostingClassifier_4').hide();
      $('#c_KNeighborsClassifier_1').hide();
      $('#c_KNeighborsClassifier_2').hide();
      $('#c_KNeighborsClassifier_3').hide();
      $('#c_KNeighborsClassifier_4').hide();
      $('#c_MLPClassifier_1').hide();
      $('#c_MLPClassifier_2').hide();
      $('#c_MLPClassifier_3').hide();
      $('#c_MLPClassifier_4').hide();
      $('#c_MLPClassifier_5').hide();
      $('#c_MLPClassifier_6').hide();
      $('#c_MLPClassifier_7').hide();
      $('#c_MLPClassifier_8').hide();
      $('#c_MLPClassifier_9').hide();
      $('#c_NuSVC_1').hide();
      $('#c_NuSVC_2').hide();
      $('#c_NuSVC_3').hide();
      $('#c_NuSVC_4').hide();
      $('#c_RandomForestClassifier_1').hide();
      $('#c_RandomForestClassifier_2').hide();
      $('#c_RandomForestClassifier_3').hide();
      $('#c_RandomForestClassifier_4').hide();
      $('#c_RandomForestClassifier_5').hide();
      $('#c_SVC_1').hide();
      $('#c_SVC_2').hide();
      $('#c_SVC_3').hide();
      $('#c_SVC_4').hide();
    }
    if($('#models').val() == 2) {
      $("#p_algorithm_s").val("0").change();
      $("#c_algorithm_s").val("0").change();
      $('#p_algorithm').hide();
      $('#c_algorithm').hide();   

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
      $('#p_SVR_1').hide();
      $('#p_SVR_2').hide();
      $('#p_SVR_3').hide();

      $('#c_validation').hide();
      $('#c_AdaBoostClassifier_1').hide();
      $('#c_AdaBoostClassifier_2').hide();
      $('#c_BaggingClassifier_1').hide();
      $('#c_BaggingClassifier_2').hide();
      $('#c_DecisionTree_1').hide();
      $('#c_DecisionTree_2').hide();
      $('#c_GradientBoostingClassifier_1').hide();
      $('#c_GradientBoostingClassifier_2').hide();
      $('#c_GradientBoostingClassifier_3').hide();
      $('#c_GradientBoostingClassifier_4').hide();
      $('#c_KNeighborsClassifier_1').hide();
      $('#c_KNeighborsClassifier_2').hide();
      $('#c_KNeighborsClassifier_3').hide();
      $('#c_KNeighborsClassifier_4').hide();
      $('#c_MLPClassifier_1').hide();
      $('#c_MLPClassifier_2').hide();
      $('#c_MLPClassifier_3').hide();
      $('#c_MLPClassifier_4').hide();
      $('#c_MLPClassifier_5').hide();
      $('#c_MLPClassifier_6').hide();
      $('#c_MLPClassifier_7').hide();
      $('#c_MLPClassifier_8').hide();
      $('#c_MLPClassifier_9').hide();
      $('#c_NuSVC_1').hide();
      $('#c_NuSVC_2').hide();
      $('#c_NuSVC_3').hide();
      $('#c_NuSVC_4').hide();
      $('#c_RandomForestClassifier_1').hide();
      $('#c_RandomForestClassifier_2').hide();
      $('#c_RandomForestClassifier_3').hide();
      $('#c_RandomForestClassifier_4').hide();
      $('#c_RandomForestClassifier_5').hide();
      $('#c_SVC_1').hide();
      $('#c_SVC_2').hide();
      $('#c_SVC_3').hide();
      $('#c_SVC_4').hide();
    }
    if($('#models').val() == 3) {
      $("#p_algorithm_s").val("0").change();
      $("#c_algorithm_s").val("0").change();
      $('#p_algorithm').hide();
      $('#c_algorithm').hide();   

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
      $('#p_SVR_1').hide();
      $('#p_SVR_2').hide();
      $('#p_SVR_3').hide();

      $('#c_validation').hide();
      $('#c_AdaBoostClassifier_1').hide();
      $('#c_AdaBoostClassifier_2').hide();
      $('#c_BaggingClassifier_1').hide();
      $('#c_BaggingClassifier_2').hide();
      $('#c_DecisionTree_1').hide();
      $('#c_DecisionTree_2').hide();
      $('#c_GradientBoostingClassifier_1').hide();
      $('#c_GradientBoostingClassifier_2').hide();
      $('#c_GradientBoostingClassifier_3').hide();
      $('#c_GradientBoostingClassifier_4').hide();
      $('#c_KNeighborsClassifier_1').hide();
      $('#c_KNeighborsClassifier_2').hide();
      $('#c_KNeighborsClassifier_3').hide();
      $('#c_KNeighborsClassifier_4').hide();
      $('#c_MLPClassifier_1').hide();
      $('#c_MLPClassifier_2').hide();
      $('#c_MLPClassifier_3').hide();
      $('#c_MLPClassifier_4').hide();
      $('#c_MLPClassifier_5').hide();
      $('#c_MLPClassifier_6').hide();
      $('#c_MLPClassifier_7').hide();
      $('#c_MLPClassifier_8').hide();
      $('#c_MLPClassifier_9').hide();
      $('#c_NuSVC_1').hide();
      $('#c_NuSVC_2').hide();
      $('#c_NuSVC_3').hide();
      $('#c_NuSVC_4').hide();
      $('#c_RandomForestClassifier_1').hide();
      $('#c_RandomForestClassifier_2').hide();
      $('#c_RandomForestClassifier_3').hide();
      $('#c_RandomForestClassifier_4').hide();
      $('#c_RandomForestClassifier_5').hide();
      $('#c_SVC_1').hide();
      $('#c_SVC_2').hide();
      $('#c_SVC_3').hide();
      $('#c_SVC_4').hide();
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

    $('#c_validation').hide();
    $('#c_AdaBoostClassifier_1').hide();
    $('#c_AdaBoostClassifier_2').hide();
    $('#c_BaggingClassifier_1').hide();
    $('#c_BaggingClassifier_2').hide();
    $('#c_DecisionTree_1').hide();
    $('#c_DecisionTree_2').hide();
    $('#c_GradientBoostingClassifier_1').hide();
    $('#c_GradientBoostingClassifier_2').hide();
    $('#c_GradientBoostingClassifier_3').hide();
    $('#c_GradientBoostingClassifier_4').hide();
    $('#c_KNeighborsClassifier_1').hide();
    $('#c_KNeighborsClassifier_2').hide();
    $('#c_KNeighborsClassifier_3').hide();
    $('#c_KNeighborsClassifier_4').hide();
    $('#c_MLPClassifier_1').hide();
    $('#c_MLPClassifier_2').hide();
    $('#c_MLPClassifier_3').hide();
    $('#c_MLPClassifier_4').hide();
    $('#c_MLPClassifier_5').hide();
    $('#c_MLPClassifier_6').hide();
    $('#c_MLPClassifier_7').hide();
    $('#c_MLPClassifier_8').hide();
    $('#c_MLPClassifier_9').hide();
    $('#c_NuSVC_1').hide();
    $('#c_NuSVC_2').hide();
    $('#c_NuSVC_3').hide();
    $('#c_NuSVC_4').hide();
    $('#c_RandomForestClassifier_1').hide();
    $('#c_RandomForestClassifier_2').hide();
    $('#c_RandomForestClassifier_3').hide();
    $('#c_RandomForestClassifier_4').hide();
    $('#c_RandomForestClassifier_5').hide();
    $('#c_SVC_1').hide();
    $('#c_SVC_2').hide();
    $('#c_SVC_3').hide();
    $('#c_SVC_4').hide();
    
    $('#p_algorithm').change(function(){
      if($('#p_algorithm_s').val() == 0) {
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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
      if($('#p_algorithm_s').val() == 1) {
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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
      if($('#p_algorithm_s').val() == 2) {
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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
      if($('#p_algorithm_s').val() == 3) {
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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
      if($('#p_algorithm_s').val() == 4) {
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

        var min = 2,
            max = 50,
            select = document.getElementById('p_KNeighborsRegressor_s');
  
            for (var i = min; i<=max; i++){
              var opt = document.createElement('option');
              opt.value = i;
              opt.innerHTML = i;
              select.appendChild(opt);
            }
              
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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
      if($('#p_algorithm_s').val() == 5) {
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
        var min = 1,
        max = 50,
        select = document.getElementById('p_MLPRegressor_s1');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }
        var min = 1,
        max = 50,
        select = document.getElementById('p_MLPRegressor_s2');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }
        var min = 1,
        max = 50,
        select = document.getElementById('p_MLPRegressor_s3');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }
        var min = 100,
        max = 5000,
        select = document.getElementById('p_MLPRegressor_s4');

        for (var i = min; i<=max; i+=50){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }

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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
      if($('#p_algorithm_s').val() == 6) {
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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
      if($('#p_algorithm_s').val() == 7) {
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
        var min = 2,
        max = 2000,
        select = document.getElementById('p_RandomForestRegressor_s');

        for (var i = min; i<=max; i++){
          var opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = i;
          select.appendChild(opt);
        }  
        
        $('#p_RandomForestRegressor_1').show(); 
        $('#p_RandomForestRegressor_2').show(); 
        $('#p_RandomForestRegressor_3').show(); 
        $('#p_RandomForestRegressor_4').show(); 
        $('#p_RandomForestRegressor_5').show(); 
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
      if($('#p_algorithm_s').val() == 8) {
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
    
        $('#c_validation').hide();
        $('#c_AdaBoostClassifier_1').hide();
        $('#c_AdaBoostClassifier_2').hide();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();
        $('#c_SVC_4').hide();
      }
    });
  }
  if(option == 1) {//clasificacion
    $('#p_algorithm').hide();
    $('#c_algorithm').show();   

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
    $('#p_SVR_1').hide();
    $('#p_SVR_2').hide();
    $('#p_SVR_3').hide();

    $('#c_validation').show();
    $('#c_AdaBoostClassifier_1').show();
    $('#c_AdaBoostClassifier_2').show();
    $('#c_BaggingClassifier_1').hide();
    $('#c_BaggingClassifier_2').hide();
    $('#c_DecisionTree_1').hide();
    $('#c_DecisionTree_2').hide();
    $('#c_GradientBoostingClassifier_1').hide();
    $('#c_GradientBoostingClassifier_2').hide();
    $('#c_GradientBoostingClassifier_3').hide();
    $('#c_GradientBoostingClassifier_4').hide();
    $('#c_KNeighborsClassifier_1').hide();
    $('#c_KNeighborsClassifier_2').hide();
    $('#c_KNeighborsClassifier_3').hide();
    $('#c_KNeighborsClassifier_4').hide();
    $('#c_MLPClassifier_1').hide();
    $('#c_MLPClassifier_2').hide();
    $('#c_MLPClassifier_3').hide();
    $('#c_MLPClassifier_4').hide();
    $('#c_MLPClassifier_5').hide();
    $('#c_MLPClassifier_6').hide();
    $('#c_MLPClassifier_7').hide();
    $('#c_MLPClassifier_8').hide();
    $('#c_MLPClassifier_9').hide();
    $('#c_NuSVC_1').hide();
    $('#c_NuSVC_2').hide();
    $('#c_NuSVC_3').hide();
    $('#c_NuSVC_4').hide();
    $('#c_RandomForestClassifier_1').hide();
    $('#c_RandomForestClassifier_2').hide();
    $('#c_RandomForestClassifier_3').hide();
    $('#c_RandomForestClassifier_4').hide();
    $('#c_RandomForestClassifier_5').hide();
    $('#c_SVC_1').hide();
    $('#c_SVC_2').hide();
    $('#c_SVC_3').hide();
    $('#c_SVC_4').hide();
    
    $('#c_algorithm').change(function(){
      if($('#c_algorithm_s').val() == 0) {
        $('#p_algorithm').hide();
        $('#c_algorithm').show();   
    
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
        $('#p_SVR_1').hide();
        $('#p_SVR_2').hide();
        $('#p_SVR_3').hide();
    
        $('#c_validation').show();
        $('#c_AdaBoostClassifier_1').show();
        $('#c_AdaBoostClassifier_2').show();
        $('#c_BaggingClassifier_1').hide();
        $('#c_BaggingClassifier_2').hide();
        $('#c_DecisionTree_1').hide();
        $('#c_DecisionTree_2').hide();
        $('#c_GradientBoostingClassifier_1').hide();
        $('#c_GradientBoostingClassifier_2').hide();
        $('#c_GradientBoostingClassifier_3').hide();
        $('#c_GradientBoostingClassifier_4').hide();
        $('#c_KNeighborsClassifier_1').hide();
        $('#c_KNeighborsClassifier_2').hide();
        $('#c_KNeighborsClassifier_3').hide();
        $('#c_KNeighborsClassifier_4').hide();
        $('#c_MLPClassifier_1').hide();
        $('#c_MLPClassifier_2').hide();
        $('#c_MLPClassifier_3').hide();
        $('#c_MLPClassifier_4').hide();
        $('#c_MLPClassifier_5').hide();
        $('#c_MLPClassifier_6').hide();
        $('#c_MLPClassifier_7').hide();
        $('#c_MLPClassifier_8').hide();
        $('#c_MLPClassifier_9').hide();
        $('#c_NuSVC_1').hide();
        $('#c_NuSVC_2').hide();
        $('#c_NuSVC_3').hide();
        $('#c_NuSVC_4').hide();
        $('#c_RandomForestClassifier_1').hide();
        $('#c_RandomForestClassifier_2').hide();
        $('#c_RandomForestClassifier_3').hide();
        $('#c_RandomForestClassifier_4').hide();
        $('#c_RandomForestClassifier_5').hide();
        $('#c_SVC_1').hide();
        $('#c_SVC_2').hide();
        $('#c_SVC_3').hide();    
        $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 1) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').show();
          $('#c_BaggingClassifier_2').show();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 2) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 3) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').show();
          $('#c_DecisionTree_2').show();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 4) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 5) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').show();
          $('#c_GradientBoostingClassifier_2').show();
          $('#c_GradientBoostingClassifier_3').show();
          $('#c_GradientBoostingClassifier_4').show();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 6) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          var min = 2,
          max = 50,
          select = document.getElementById('c_KNeighborsClassifier_s');

          for (var i = min; i<=max; i++){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
          }
            
          
          $('#c_KNeighborsClassifier_1').show();
          $('#c_KNeighborsClassifier_2').show();
          $('#c_KNeighborsClassifier_3').show();
          $('#c_KNeighborsClassifier_4').show();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 7) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          var min = 1,
          max = 50,
          select = document.getElementById('c_MLPClassifier_s1');

          for (var i = min; i<=max; i++){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
          }
          var min = 1,
          max = 50,
          select = document.getElementById('c_MLPClassifier_s2');

          for (var i = min; i<=max; i++){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
          }
          var min = 1,
          max = 50,
          select = document.getElementById('c_MLPClassifier_s3');

          for (var i = min; i<=max; i++){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
          }
          var min = 100,
          max = 5000,
          select = document.getElementById('c_MLPClassifier_s4');

          for (var i = min; i<=max; i+=50){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
          }
          
          $('#c_MLPClassifier_1').show();
          $('#c_MLPClassifier_2').show();
          $('#c_MLPClassifier_3').show();
          $('#c_MLPClassifier_4').show();
          $('#c_MLPClassifier_5').show();
          $('#c_MLPClassifier_6').show();
          $('#c_MLPClassifier_7').show();
          $('#c_MLPClassifier_8').show();
          $('#c_MLPClassifier_9').show();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 8) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').show();
          $('#c_NuSVC_2').show();
          $('#c_NuSVC_3').show();
          $('#c_NuSVC_4').show();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 9) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          var min = 2,
          max = 2000,
          select = document.getElementById('c_RandomForestClassifier_s');

          for (var i = min; i<=max; i++){
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            select.appendChild(opt);
          }
          $('#c_RandomForestClassifier_1').show();
          $('#c_RandomForestClassifier_2').show();
          $('#c_RandomForestClassifier_3').show();
          $('#c_RandomForestClassifier_4').show();
          $('#c_RandomForestClassifier_5').show();
          $('#c_SVC_1').hide();
          $('#c_SVC_2').hide();
          $('#c_SVC_3').hide();
          $('#c_SVC_4').hide();
        }
        if($('#c_algorithm_s').val() == 10) {
          $('#p_algorithm').hide();
          $('#c_algorithm').show();   
      
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
          $('#p_SVR_1').hide();
          $('#p_SVR_2').hide();
          $('#p_SVR_3').hide();
      
          $('#c_validation').show();
          $('#c_AdaBoostClassifier_1').hide();
          $('#c_AdaBoostClassifier_2').hide();
          $('#c_BaggingClassifier_1').hide();
          $('#c_BaggingClassifier_2').hide();
          $('#c_DecisionTree_1').hide();
          $('#c_DecisionTree_2').hide();
          $('#c_GradientBoostingClassifier_1').hide();
          $('#c_GradientBoostingClassifier_2').hide();
          $('#c_GradientBoostingClassifier_3').hide();
          $('#c_GradientBoostingClassifier_4').hide();
          $('#c_KNeighborsClassifier_1').hide();
          $('#c_KNeighborsClassifier_2').hide();
          $('#c_KNeighborsClassifier_3').hide();
          $('#c_KNeighborsClassifier_4').hide();
          $('#c_MLPClassifier_1').hide();
          $('#c_MLPClassifier_2').hide();
          $('#c_MLPClassifier_3').hide();
          $('#c_MLPClassifier_4').hide();
          $('#c_MLPClassifier_5').hide();
          $('#c_MLPClassifier_6').hide();
          $('#c_MLPClassifier_7').hide();
          $('#c_MLPClassifier_8').hide();
          $('#c_MLPClassifier_9').hide();
          $('#c_NuSVC_1').hide();
          $('#c_NuSVC_2').hide();
          $('#c_NuSVC_3').hide();
          $('#c_NuSVC_4').hide();
          $('#c_RandomForestClassifier_1').hide();
          $('#c_RandomForestClassifier_2').hide();
          $('#c_RandomForestClassifier_3').hide();
          $('#c_RandomForestClassifier_4').hide();
          $('#c_RandomForestClassifier_5').hide();
          $('#c_SVC_1').show();
          $('#c_SVC_2').show();
          $('#c_SVC_3').show();
          $('#c_SVC_4').show();

        }
    });
  }
}
function loadData(){
  $("#createJob").on("click", function(){
  var user = getQuerystring("user");
  var job = getQuerystring("job");
  var opc = getQuerystring("opc");





















































  
  var p_AdaBoostRegressor_1 = $('#p_AdaBoostRegressor_1_val').val();
  var p_AdaBoostRegressor_2 = $('#p_AdaBoostRegressor_2_val').val(); 
  var p_BaggingRegressor_1 = $('#p_BaggingRegressor_1_val').val();   
  
  $('#p_BaggingRegressor_2').val();   
  $('#p_DecisionTree_1').val();
  $('#p_DecisionTree_2').val(); 
  $('#p_GradientBoostingRegressor_1').val(); 
  $('#p_GradientBoostingRegressor_2').val(); 
  $('#p_GradientBoostingRegressor_3').val(); 
  $('#p_GradientBoostingRegressor_4').val(); 
  $('#p_GradientBoostingRegressor_5').val(); 
  $('#p_KNeighborsRegressor_1').val();
  $('#p_KNeighborsRegressor_2').val();
  $('#p_KNeighborsRegressor_3').val();
  $('#p_KNeighborsRegressor_4').val();
  $('#p_MLPRegressor_1').val();
  $('#p_MLPRegressor_2').val();
  $('#p_MLPRegressor_3').val();
  $('#p_MLPRegressor_4').val();
  $('#p_MLPRegressor_5').val();
  $('#p_MLPRegressor_6').val();
  $('#p_MLPRegressor_7').val();
  $('#p_MLPRegressor_8').val();
  $('#p_MLPRegressor_9').val();
  $('#p_NuSVR_1').val();
  $('#p_NuSVR_2').val();
  $('#p_NuSVR_3').val();
  $('#p_NuSVR_4').val();
  $('#p_RandomForestRegressor_1').val();
  $('#p_RandomForestRegressor_2').val();
  $('#p_RandomForestRegressor_3').val();
  $('#p_RandomForestRegressor_4').val();
  $('#p_RandomForestRegressor_5').val();
  $('#p_SVR_1').val();
  $('#p_SVR_2').val();
  $('#p_SVR_3').val();

  $('#c_validation').val();
  $('#c_AdaBoostClassifier_1').val();
  $('#c_AdaBoostClassifier_2').val();
  $('#c_BaggingClassifier_1').val();
  $('#c_BaggingClassifier_2').val();
  $('#c_DecisionTree_1').val();
  $('#c_DecisionTree_2').val();
  $('#c_GradientBoostingClassifier_1').val();
  $('#c_GradientBoostingClassifier_2').val();
  $('#c_GradientBoostingClassifier_3').val();
  $('#c_GradientBoostingClassifier_4').val();
  $('#c_KNeighborsClassifier_1').val();
  $('#c_KNeighborsClassifier_2').val();
  $('#c_KNeighborsClassifier_3').val();
  $('#c_KNeighborsClassifier_4').val();
  $('#c_MLPClassifier_1').val();
  $('#c_MLPClassifier_2').val();
  $('#c_MLPClassifier_3').val();
  $('#c_MLPClassifier_4').val();
  $('#c_MLPClassifier_5').val();
  $('#c_MLPClassifier_6').val();
  $('#c_MLPClassifier_7').val();
  $('#c_MLPClassifier_8').val();
  $('#c_MLPClassifier_9').val();
  $('#c_NuSVC_1').val();
  $('#c_NuSVC_2').val();
  $('#c_NuSVC_3').val();
  $('#c_NuSVC_4').val();
  $('#c_RandomForestClassifier_1').val();
  $('#c_RandomForestClassifier_2').val();
  $('#c_RandomForestClassifier_3').val();
  $('#c_RandomForestClassifier_4').val();
  $('#c_RandomForestClassifier_5').val();
  $('#c_SVC_1').val();
  $('#c_SVC_2').val();
  $('#c_SVC_3').val();
  $('#c_SVC_4').val();

  console.log(p_AdaBoostRegressor_1)
  $.ajax({
    method: "GET",
    url: "../php/jobs/predictiveModelsForm.php",
    data: {
      user,job,opc,
      p_AdaBoostRegressor_1,
      p_AdaBoostRegressor_2,
      p_BaggingRegressor_1,
    }
  }).done(function(info){
    var json_info = JSON.parse( info );
    var message = "The job with id "+job+" has been initialized correctly, to follow the status of this job go to 'My Jobs'";
    $("#success_text").html(message);
    $('#okResponse').show();
    var ruta = "location.href=\"../index.html\"";
    setTimeout(ruta, 6000);  
    });
  });

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