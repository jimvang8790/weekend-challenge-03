// doc ready
$(document).ready(onReady);

function onReady(){
  //event listener
  $('#submit').on('click', addTask);
  $(document).on('click', '.completed', completed);// creating a new document inorder to complete
  $(document).on('click', '.delete', reassign); // creating a new document inorder to delete
  getTask(); // getTask will display when DOM is loaded
}// end of onReady

function getTask() {
  $.ajax({
    url:'/task',
    type:'GET',
    success: function(response){
      console.log('in getTask:', response);

      $('.container').empty();

      // this loop is how the appending new tasl will look on the DOM
      for (var i = 0; i < response.length; i++) {
        // $('.container').append('<p>Name: '+ response[i].name + ' | Task: '+ response[i].task + ' | Day to be Done by: '+ response[i].day_to_be_done + ' | Completed: '+ response[i].completed +'</p>'); // end of append
        $('.container').append('<div class="person"><p>Name: ' + response[i].name + '</p>' +
                                                    '<p>Task: ' + response[i].task + '</p>' +
                                                    '<p>Day to be Done by: ' + response[i].day_to_be_done + '</p>' +
                                                    '<p>Completed: ' + response[i].completed + '</p><button class="completed data-taskid=">Completed</button><button class="delete" data-taskid="'+response[i].id+'">Delete</button></div>');
      } // end of for loop
    }// end of success
  }); // end of ajax
}// end of getTask function

//**NOTE**
// this function will allow user to add task to the database from the DOM
function addTask() {

  var objectToSend = {
    name: $('#name').val(),
    task: $('#task').val(),
    day: $('#day').val(),
    done: $('#done').val(),
  };// end of objectToSend

  $.ajax({
    url:'/addingTask',
    type:'POST',
    data: objectToSend,
    success: function(response){
      console.log('adding tasks', response);
      getTask();
    }// end of success
  });// end of ajax

}// end of addTask

//**NOTE**
// this function updatesthe DOM to a visual representation when user completes a tasks
function completed() {
  console.log('color change');
  if (($(this).parent().css('background-color')) === '#ffffff') {
    $(this).parent().css('background-color', 'green');
  }
  else {
    $(this).parent().css('background-color', '#ffffff');
  }
}// end of completed function

//**NOTE**
// this function is removing a task in the todo database from the DOM
function reassign() {
  var myID = $(this).data('taskid');
  console.log('remove', myID);

  // sending to the server via ajax
  $.ajax({
    url: '/remove',
    type: 'DELETE',
    data: {id: myID},
    success: function(response){
      console.log('delete', response);
      getTask();
    }// end of success
  });// end of ajax
}// end of reassign
