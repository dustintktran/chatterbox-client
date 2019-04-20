var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var refresh = document.createElement("button");
    refresh.innerHTML = "Refresh Messages";
    refresh.addEventListener("click", function(){
      $("#chats").empty();
      App.fetch();
      setTimeout(Data.results.forEach(obj => MessagesView.renderMessage(obj)) ,2500);
      // Data.results.forEach(obj => MessagesView.renderMessage(obj));
      var counter = 0;
      // Messages = {};
      Data.results.forEach(function(val){
        Messages[counter] = val;
        counter++;
        if(val["roomname"]) {
          if(!Rooms.rooms.includes(val["roomname"])){
            Rooms.rooms.push(val["roomname"]);
            $('#rooms select').append(`<option value = "${val["roomname"]}">${val["roomname"]}</option>`)
          }
        }
      });
    });
    var h1 = document.getElementsByTagName("h1")[0];
    h1.appendChild(refresh);
  },

  render: function() {
  },

  renderMessage: function(obj){
    // $('.isAMessage').empty();
    // var room = $("select option:selected")[0].value;
    var $element = $(`<div class="${obj.roomname}"></div>`); // class="isAMessage"
    var $user = $('<div class="username"></div>');
    $user.click(function(){
      Friends.toggleStatus();
      console.log($user[0].innerText);
    });
    // $user.attr("onclick", );
    
    
    // function(){
    //   Friends.toggleStatus()
    // });
    var $text = $('<div></div>');
    $user.attr('value', obj.username);
    $user.html(`<b>${obj.username}: </b>`);
    $text.text(obj.text);
    $element.append($user);
    $element.append($text);
    // $element.text(obj);
    this.$chats.append($element);//<== Message input here
  }

};

//obj.username = testname
//obj.text = text that we want
