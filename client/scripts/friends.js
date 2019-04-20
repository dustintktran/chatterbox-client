var friendsList = [];
var Friends = {
    toggleStatus: function(friend){
        if(!friendsList.includes(friend)){
            friendsList.push(friend);
        }
        console.log('friended');
        return true;
    }

};