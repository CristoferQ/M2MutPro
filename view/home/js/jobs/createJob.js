$(document).ready(function() {
 
  Dropzone.options.frmAgregarCsv = {
    paramName: "file1", // The name that will be used to transfer the file
    maxFilesize: 5, // MB
    url:"../php/uploadCsv.php",

        success: function (file1, response) {
            file.previewElement.classList.add("dz-success");
            console.log("Successfully uploaded :");
        },
        error: function (file1, response) {
            file.previewElement.classList.add("dz-error");
        }
  };
  Dropzone.options.frmAgregarPdb = {
    paramName: "file2", // The name that will be used to transfer the file
    maxFilesize: 5, // MB
    url:"../php/uploadPdb.php",
        success: function (file2, response) {
            file.previewElement.classList.add("dz-success");
            console.log("Successfully uploaded :");
        },
        error: function (file2, response) {
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
}).on('success.form.bv', function(e) {
  //e.preventDefault();
  $('#loading').show();
  

      //FALTAN VALIDADORES
      //var optionProcess = $("#initNewJob #optionProcess").val();
      //var percentage = $("#initNewJob #percentage").val();
      //var significanceLevel = $("#initNewJob #significanceLevel").val();
      var nameJob = $("#initNewJob #nameJob").val();
      var descJob = $("#initNewJob #descJob").val();

      $.ajax({
        method: "POST",
        url: "../php/jobs/addData.php",
        data: {
          //"optionProcess"   : optionProcess,
          //"percentage"   : percentage,
          //"significanceLevel"   : significanceLevel,
          "nameJob"   : nameJob,
          "descJob"   : descJob
        }
      }).done( function( info ){
        var response = JSON.parse(info);

        if (response.exec== "ERROR"){
          $('#loading').hide();
          var message = "Error during the creation of the job, please check the data set. If the error persists, please contact the administrator.";
          $(".messageError").html( message);

          $('#errorResponse').show();
          setTimeout("location.href=''", 5000);
        }else{
          var job = response.job;
          //location.href="resultProcess/?job="+job+"&file="+response.nameFile;
        }
      });
    });
  });