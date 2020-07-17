$(window).on('load', function() {
	listar();
});

$.fn.DataTable.ext.pager.numbers_length = 5;

var listar = function(){
	var t = $('#jobs').DataTable({
		"responsive": true,
		"destroy":true,
		"order": [[ 5, "desc" ]],
		"ajax":{
			"method":"POST",
			"url": "../php/jobs/showJobs.php"
		},
		"columns":[
			{"data":"idjob"},
			{"data":"nameJob"},
			{"data":"descriptionJob"},
			{"data":"typeDataSet"},
			{"data":"statusJob"},
			{"data":"createdJob"},
			{"data":"modifiedJob"},
			{"defaultContent": "<button id='b_results' type='button' class='btn btn-success' data-toggle='modal' data-target='.bs-example-modal-sm'><i class='fa fa-file'></i></button>"}
		]
  });
  getIDForDetail("#jobs tbody", t);
}

var getIDForDetail = function(tbody, table){
	$(tbody).on("click", "#b_results", function(){
		var data = table.row( $(this).parents("tr") ).data();
		var idjob = data.idjob;

		var statusJob = data.statusJob;
    
		if (statusJob != "Created" && statusJob != "START" &&  statusJob != "PROCESING"){
			if (data.typeDataSet == 'Prediction'){
				location.href="../results?job="+idjob;
			}else{
				location.href="../results?job="+idjob;
			}
		
		$('#errorResponse').hide();
		}else{
			var message = "The job is not finished yet";
    		$("#error_text").html(message);
			$('#errorResponse').show();
			//setTimeout("location.href=''", 5000);
		}
	});
}




