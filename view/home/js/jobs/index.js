$(document).ready(function() {
    loadData();
  });
  
function loadData(){

  var data = [
    {
      x: ['2020-07-22 16:33:00', '2020-07-26 17:23:00', '2020-07-27 19:53:00'],
      y: [1, 3, 6],
      type: 'scatter'
    }
  ];
  
  Plotly.newPlot('count1', data);
      
      
    
      var data = [{
        values: [4, 10, 0, 2, 8],
        labels: ['Created', 'Initialized', 'Processing', 'Finished', 'Rejected'],
        type: 'pie'
      }];
      Plotly.newPlot('count2', data);
      
  
}