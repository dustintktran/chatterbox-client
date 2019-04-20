var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // this.$button.attr("onclick", console.log('hi'));
    this.$button.on("click", function(){
      Rooms.add();
    })
  },

  render: function() {
  },

  renderRoom: function() {
    this.$select.append('<div></div>')
  }
};


/*    var $element = $('<div></div>');
    var $user = $('<div class="username"></div>');
    $user.attr("onclick", Friends.toggleStatus());
    var $text = $('<div></div>');
    $text.text(obj.text);
    $element.append($user);
    $element.append($text); */