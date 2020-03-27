$(document).ready(function() {



      //FALTAN VALIDADORES
      //var optionProcess = $("#initNewJob #optionProcess").val();
      //var percentage = $("#initNewJob #percentage").val();
      //var significanceLevel = $("#initNewJob #significanceLevel").val();
      //var nameJob = $("#initNewJob #nameJob").val();
      //var descJob = $("#initNewJob #descJob").val();

      $.ajax({
        method: "POST",
        url: "../php/jobs/addData.php",
        data: {
          //"optionProcess"   : optionProcess,
          //"percentage"   : percentage,
          //"significanceLevel"   : significanceLevel,
          //"nameJob"   : nameJob,
          //"descJob"   : descJob
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
