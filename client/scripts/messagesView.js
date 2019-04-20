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
    var renderedName = obj.username.replace(/[\s=%.*+?^${}()|[\]\\,-]/g, '');
    // console.log(renderedName);
    var $element = $(`<div class="${obj.roomname}"></div>`); // class="isAMessage"
    $element.addClass('message');
    var $user = $(`<div class='${renderedName}'></div>`); //$('<div class="username"></div>');
    $user.click(function(){//=============================================================================THIS HAPPENS ON CLICK
      if ($user[0].innerText.slice(0,$user[0].innerText.length-1) !== App.username){
        Friends.toggleStatus($user[0].innerText.slice(0,$user[0].innerText.length-1));


        if($user.hasClass('friend')){

            $(`.${renderedName}`).removeClass('friend');
            $user.removeClass('friend');

        } else {

            $user.addClass('friend');
            $(`.${renderedName}`).addClass('friend');
        }

        // console.log($user[0].innerText.slice(0,$user[0].innerText.length-1));
      }
    });  //============================================================================ ON CLICK FUNCTION ENDS
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

          // if(obj.username.includes(' ')){
          //   //make a new variable and set it to obj.username with replaced spaces
          //   var usernameWithUnderscores = obj.username;
          //   // that line but replace obj/username with the var
  
          //   console.log(usernameWithUnderscores.replace(/\s/g, ''));
          //   $(`.${usernameWithUnderscores.replace(/\s/g, '')}`).addClass('friend');
          //   $user.addClass('friend');
          // }  