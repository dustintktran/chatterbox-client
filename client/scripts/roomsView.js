var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {


    // var renderRooms = document.createElement("button");
    // renderRooms.innerHTML = "Render Rooms";
    // renderRooms.addEventListener("click", function(){
    //   $("#chats").empty();
    //   var room = $("select option:selected")[0].value;
    //   console.log(room);
    //   for(var val in Messages) {
    //       if(Messages[val]["roomname"] === room){
    //         MessagesView.renderMessage(Messages[val]);
    //       }
    //   }  // setTimeout(Data.results.forEach(obj => MessagesView.renderMessage(obj)) ,2500);
    //   // Data.results.forEach(obj => MessagesView.renderMessage(obj));
    //   Data.results.forEach(function(val){
    //     if(val["roomname"]) {
    //       if(!Rooms.rooms.includes(val["roomname"])){
    //         Rooms.rooms.push(val["roomname"]);
    //         $('#rooms select').append(`<option value = "${val["roomname"]}">${val["roomname"]}</option>`)
    //       }
    //     }
    //   });
    // });
    
        // var h1 = document.getElementsByTagName("h1")[0];
        // h1.appendChild(renderRooms);
        

    var autoRenderRooms = document.querySelector('.roomSelect');

    autoRenderRooms.addEventListener('change', function(){
      $("#chats").empty();
      var room = $("select option:selected")[0].value;
      console.log(room);
      for(var val in Messages) {
          if(Messages[val]["roomname"] === room){
            MessagesView.renderMessage(Messages[val]);
          }
      }  // setTimeout(Data.results.forEach(obj => MessagesView.renderMessage(obj)) ,2500);
      // Data.results.forEach(obj => MessagesView.renderMessage(obj));
      Data.results.forEach(function(val){
        if(val["roomname"]) {
          if(!Rooms.rooms.includes(val["roomname"])){
            Rooms.rooms.push(val["roomname"]);
            $('#rooms select').append(`<option value = "${val["roomname"]}">${val["roomname"]}</option>`)
          }
        }
      });
    });






    
    
    
    // this.$button.attr("onclick", console.log('hi'));
    this.$button.on("click", function(){
      Rooms.add();
    })
  },
  
  render: function() {
  },
  
  renderRoom: function() {
    this.$select.append('<div></div>');
  }
};



//object.addEventListener("change", function);
// object.onchange = function
/*    var $element = $('<div></div>');
var $user = $('<div class="username"></div>');
$user.attr("onclick", Friends.toggleStatus());
var $text = $('<div></div>');
$text.text(obj.text);
    $element.append($user);
    $element.append($text); */
    
    //loop through all messages
    //if a roomname exists,
    //if rooms array doesnt have it
    //add to rooms array
    
    //for all in rooms array
    //append the room to the options
        
    
    
    
    
    // something that we iterate through and act on.forEach(function(val){
        //   if($(this).text === val["roomname"] ){
        //     MessagesView.renderMessage(val);
        //   }
        
          //$("select option:selected")
          // str += $(this).text() + " ";
          // console.log($(this).text());