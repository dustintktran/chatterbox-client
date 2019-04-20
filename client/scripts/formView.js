var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var obj = {};
    event.preventDefault();
    var text = $('#message').val();
    obj.username = App.username;
    obj.text = text;
    obj.roomname = $("select option:selected")[0].value;
    Parse.create(obj); //<=============???????

    // var $element = $('<div></div>');
    // var $user = $('<div class="username"></div>');
    // // $user.on("click", function(){
    // //   Friends.toggleStatus();
    // // });
    // $user.html('<b>' + App.username + ': </b>');
    // var $text = $('<div></div>');
    // $text.text(text);
    // $element.append($user);
    // $element.append($text);
    // $('#chats').append($element);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};