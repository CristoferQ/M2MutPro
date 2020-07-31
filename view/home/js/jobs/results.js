$(document).ready(function() {
    loadData();
  });
  
  function loadData(){
    var user = 1;
    var job = getQuerystring("job");
    $.ajax({
			method:"GET",
            url: "../php/jobs/results.php",
            data:{
                user,job
            }
		}).done( function(info){            
        $("#idJob").html(job);
        var data = JSON.parse(info);
        $("#nameJob").html(data.nameJob);
        $("#descJob").html(data.descriptionJob);
        $("#typeOfTask").html(data.typeDataSet);
        $("#protein").html(data.pdbCode);
        $("#numberOfExamples").html(data.numberOfExamples);

        //var nameFile = "../../../jobs/"+user+"/"+job+"/results/results.json";
      var nameFile = "../../../jobs/1/1594879133/results/results.json";
      readTextFile(nameFile, function(text){
        var data = JSON.parse(text);
        $("#WT_RSA_MIN").html(data.responseStatistics.WT_RSA['Minimum']);
        $("#WT_RSA_MAX").html(data.responseStatistics.WT_RSA['Maximum']);
        $("#WT_RSA_MEAN").html(data.responseStatistics.WT_RSA['Mean']);
        $("#WT_RSA_STD").html(data.responseStatistics.WT_RSA['Standard deviation']);
        $("#WT_DEPTH_MIN").html(data.responseStatistics.WT_DEPTH['Minimum']);
        $("#WT_DEPTH_MAX").html(data.responseStatistics.WT_DEPTH['Maximum']);
        $("#WT_DEPTH_MEAN").html(data.responseStatistics.WT_DEPTH['Mean']);
        $("#WT_DEPTH_STD").html(data.responseStatistics.WT_DEPTH['Standard deviation']);
        $("#MT_RSA_MIN").html(data.responseStatistics.MT_RSA['Minimum']);
        $("#MT_RSA_MAX").html(data.responseStatistics.MT_RSA['Maximum']);
        $("#MT_RSA_MEAN").html(data.responseStatistics.MT_RSA['Mean']);
        $("#MT_RSA_STD").html(data.responseStatistics.MT_RSA['Standard deviation']);
        $("#MT_DEPTH_MIN").html(data.responseStatistics.MT_DEPTH['Minimum']);
        $("#MT_DEPTH_MAX").html(data.responseStatistics.MT_DEPTH['Maximum']);
        $("#MT_DEPTH_MEAN").html(data.responseStatistics.MT_DEPTH['Mean']);
        $("#MT_DEPTH_STD").html(data.responseStatistics.MT_DEPTH['Standard deviation']);
        $("#Predicted_DDG_MIN").html(data.responseStatistics.Predicted_DDG['Minimum']);
        $("#Predicted_DDG_MAX").html(data.responseStatistics.Predicted_DDG['Maximum']);
        $("#Predicted_DDG_MEAN").html(data.responseStatistics.Predicted_DDG['Mean']);
        $("#Predicted_DDG_STD").html(data.responseStatistics.Predicted_DDG['Standard deviation']);
        });



    $('#continuousAttributes').on('change', function() {
      readTextFile(nameFile, function(text){
        var valor = $("#continuousAttributes").val();
        var texto = $("#continuousAttributes option:selected").text();
        var data = JSON.parse(text);
        var data = [{
          x: data.continuousAttributes[valor],
          type: 'histogram',
        }];
        var layout = {
          title: texto,
        };
        Plotly.newPlot('count1', data, layout);
        });
      });

      $('#categoricalAttributes').on('change', function() {
        readTextFile(nameFile, function(text){
          var valor = $("#categoricalAttributes").val();
          var texto = $("#categoricalAttributes option:selected").text();
          var data = JSON.parse(text);
          var data = [{
            textposition: 'inside',
            values: Object.values(data.categoricalAttributes[valor]),
            labels: Object.keys(data.categoricalAttributes[valor]),
            type: 'pie',
          }];
          var layout = {
            title: texto,
          };
          Plotly.newPlot('count2', data, layout);
          });
        });


        var nameFile2 = "../../../jobs/1/1594879133/results/resultsTraining.json";
        readTextFile(nameFile2, function(text){
          var data = JSON.parse(text);
          
          if (data.errorExec.curveLearning == "ok"){
            var img = document.getElementById('learningCurveImg');
            img.src= "../../../jobs/1/1594879133/results/curveLearning.svg";
          }else{
            var img = document.getElementById('learningCurveImg');
            img.src= "../../../view/user/resourceData/error.png";
          }

          var params_values = JSON.stringify(data.Params).replace(new RegExp("{", 'g'), "");
          var params_values = params_values.replace(new RegExp("}", 'g'), "");
          var params_values = params_values.replace(new RegExp("\"", 'g'), "");
          var params_values = params_values.replace(new RegExp(",", 'g'), " ");
          console.log(params_values);


          $(".precision").html(parseFloat(data.Performance.precision).toFixed(4)*100+"%");
          $(".accuracy").html(parseFloat(data.Performance.accuracy).toFixed(4)*100+"%");
          $(".recall").html(parseFloat(data.Performance.recall).toFixed(4)*100+"%");
          $(".f1_score").html(parseFloat(data.Performance.f1).toFixed(4)*100);
          $(".fbeta").html(parseFloat(data.Performance.fbeta).toFixed(4)*100);
          $(".negloss").html(parseFloat(data.Performance.neg_log_loss).toFixed(2));

          $(".algorithm").html(data.algorithm);
          $(".params_values").html(params_values);
          $(".validation").html(data.Validation);
          $(".transform").html(JSON.stringify(data.classTransform));
          

          var xData = data.matrixConfusionResponse.header;

						var trace1 = {
							x: xData,
							y: data.matrixConfusionResponse.fiabilidad,
							name: 'Specificity',
							type: 'bar'
						};

						var trace2 = {
							x: xData,
							y: data.matrixConfusionResponse.bakanosidad,
							name: 'Sensitivity',
							type: 'bar'
						};

						var dataLa = [trace1, trace2];

						var layout = {
							barmode: 'group',

							yaxis:{
								title:'Values in %'
							},

							xaxis:{
								title:'Class in dataset'
							}

            };
            
            Plotly.newPlot('fiabilidad', dataLa, layout);

						//hacemos el heat map de la matriz de confusion
						var colorscaleValue = [
							[0, '#3D9970'],
							[1, '#001f3f']
						];
						var dataHeat = [
							{
								z: data.matrixConfusionResponse.matrix,
								x: xData,
								y: xData,
								type: 'heatmap',
								colorscale: colorscaleValue
							}
						];

						var layout = {

							annotations: [],
							xaxis: {
								title: 'Prediction Values',
							}

            };
            
            for ( var i = 0; i < xData.length; i++ ) {
							for ( var j = 0; j < xData.length; j++ ) {
								var currentValue = data.matrixConfusionResponse.matrix[i][j];
								if (currentValue != 0.0) {
									var textColor = 'white';
								}else{
									var textColor = 'black';
								}
								var result = {
									xref: 'x1',
									yref: 'y1',
									x: xData[j],
									y: xData[i],
									text: data.matrixConfusionResponse.matrix[i][j],
									font: {
										family: 'Arial',
										size: 16,
										color: 'rgb(50, 171, 96)'
									},
									showarrow: false,
									font: {
										color: textColor
									}
								};
								layout.annotations.push(result);
							}
						}

            Plotly.newPlot('confusionMatrixGraph', dataHeat, layout);
          });
          

          var nameFile3 = "../../../jobs/1/1594879132/results/resultsTraining.json";
          readTextFile(nameFile3, function(text){
          var data = JSON.parse(text);
          var params_values = JSON.stringify(data.Params).replace(new RegExp("{", 'g'), "");
          var params_values = params_values.replace(new RegExp("}", 'g'), "");
          var params_values = params_values.replace(new RegExp("\"", 'g'), "");
          var params_values = params_values.replace(new RegExp(",", 'g'), " ");
    
          //creamos el text para los params...
          $(".algorithm").html(data.algorithm);
          $(".params_values").html(params_values);
          $(".r_score").html(JSON.stringify(data.Performance.r_score));
          $(".pearson").html(JSON.stringify(data.Performance.pearson));
          $(".spearman").html(JSON.stringify(data.Performance.spearman));
          $(".kendalltau").html(JSON.stringify(data.Performance.kendalltau));


          //obtenemos los valores de las predicciones y los reales...
          var valuesPredict = data.Performance.predict_values;
          var valuesReal = data.Performance.real_values;
          var xValues = [];
          var errorGraphic = [];

          //generamos el array con las x...
          for (i=0;i<valuesReal.length; i++){
            xValues.push(i+1);
            errorGraphic[i] = valuesReal[i]-valuesPredict[i];

          }
          $('#download').on('click', function() {
            window.location.href = '../../../jobs/1/1594879133/results/model.joblib';
          });

          
          //generamos el grafico...
          createGraphicData(valuesReal, valuesPredict, xValues);
          createGraphicDataOnlyTrace(errorGraphic, xValues);


        }); 
    });


  function createGraphicData(valuesReal, valuesPredict, xValues){
    var trace1 = {
      x: valuesReal,
      y: valuesPredict,
      mode: 'markers',
      type: 'scatter',
      marker: {
        color: 'rgb(219, 64, 82)',
        size: 12
      }
    };
  
    var layout = {
      xaxis:{
        title: "Real Values"
      },
  
      yaxis:{
        title: "Predicted Values"
      }
    }
    var data = [trace1];
  
    Plotly.newPlot('predictionData', data, layout);
  
  }
  
  //funcion para cargar el grafico
  function createGraphicDataOnlyTrace(values, xValues){
  
    //formamos la trace...
    var trace2 = {
      x: values,
      name: 'control',
      autobinx: true,
      histnorm: "count",
      marker: {
        color: "rgba(128, 0, 0, 1)",
         line: {
          color:  "rgba(128, 0, 0, 1)",
          width: 1
        }
      },
  
      type: "histogram"
    };
  /*
    var trace2 = {
      x: xValues,
        y: values,
        mode: 'markers',
      name: 'Error Values',
      line: {
            line: {shape: 'spline'}
          },
      marker: {
        color: 'rgb(219, 64, 82)',
        size: 12
      }
    };
  */
    var data = [trace2];
    Plotly.newPlot('errorGraphic', data);
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
}