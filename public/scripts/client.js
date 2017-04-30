// doc ready
$(document).ready(onReady);

function onReady(){
  //event listener
  $('#submit').on('click', getTask);

  getTask(); // getTask will display when DOM is loaded
}// end of onReady

function getTask() {
  $.ajax({
    url: '/task',
    type: 'GET',
    success: function(response){
      console.log('in getTask', response);

      $('.container').empty();

      // this loop is how the appending new tasl will look on the DOM
      for (var i = 0; i < response.length; i++) {
        $('.container').append('<p>Name: '+ response[i].name + ' | Task: '+ response[i].task + ' | Day to be Done by: '+ response[i].day_to_be_done + ' | Completed: '+ response[i].completed +'</p>'); // end of append
      } // end of for loop
    }// end of success
  }); // end of ajax
}// end of getTask function
