var Rooms = {
    rooms: [],
    currentRoom: undefined,
    add: function(){
        var newRoom = prompt('What room name?' || 'noName');
        this.rooms.push(newRoom);
        $('#rooms select').append(`<option value = "${newRoom}">${newRoom}</option>`)
        // console.log('clicked');
    }
};

