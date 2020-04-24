$(document).ready(function() {
  var submit = document.getElementById('processJob');
  submit.disabled = true;


  Dropzone.options.frmAgregarCsv = {
    paramName: "file1", // The name that will be used to transfer the file
    maxFilesize: 5, // MB
    url:"../php/uploadCsv.php",
        success: function (file1, response) {
            file1.previewElement.classList.add("dz-success");
            console.log("Successfully uploaded :");
        },
        error: function (file1, response) {
            file.previewElement.classList.add("dz-error");
        }
  };
  
  $('#initNewJob').bootstrapValidator({
    
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      pdb_code: {
        validators: {
            notEmpty: {
                message: 'The pdb code is required'
            }
        }
      },
        nameJob: {
            validators: {
                notEmpty: {
                    message: 'The name of job is required'
                }
            }
        },

        descJob: {
            validators: {
                notEmpty: {
                    message: 'The Description of Job is required'
                }
            }
        }
    }
    
})
.on('success.form.bv', function(e) {
  $('#loading').show();
  
  e.preventDefault();
      var pdb_code = $("#initNewJob #pdb_code").val();
      var nameJob = $("#initNewJob #nameJob").val();
      var descJob = $("#initNewJob #descJob").val();
      $.ajax({
        method: "POST",
        url: "../php/jobs/addData.php",
        data: {
          "pdb_code"   : pdb_code,
          "nameJob"   : nameJob,
          "descJob"   : descJob
        }
      }).done(function(info){
        var response = JSON.parse(info);
        
        /*if (response.file == "ERROR"){
          alert("Se ha producido un error en la subida de archivos");
          //location.href="";
        }*/
        //else{
          var nameFile = "../../../jobs/"+response.user+"/"+response.job+"/results/summary_log.json";
          readTextFile(nameFile, function(text){
            var data = JSON.parse(text);
            console.log(data);
            //$(".precisionDefinition").html(data.definitionPerformanceCla[0].definition);
          });
          /*if (response.exec == "ERROR"){
            $('#loading').hide();
            var message = "Error during the creation of the job, please check the data set. If the error persists, please contact the administrator.";
            $(".messageError").html( message);
  
            $('#errorResponse').show();
            setTimeout("location.href=''", 5000);
          }else{
            var job = response.job;
            //location.href="../checkJob/index.html";
          }
          */
       // }
      });
    });
});

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