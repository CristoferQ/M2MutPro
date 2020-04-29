$(document).ready(function() {

	var user = getQuerystring("user");
	var job = getQuerystring("job");

	var url = "../../../jobs/"+user+"/"+job+"/results/error.json";
	console.log(url);
    $('#example').DataTable( {
        "ajax": url
    } );
});

function getQuerystring(key) {
	var url_string = window.location;
	var url = new URL(url_string);
	var c = url.searchParams.get(key);
	return c;
}