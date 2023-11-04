function bestFriend(friends) {
    let friendName = '';
    for(let i = 0; i <friends.length; i++){
        if(friends[i].length > friendName.length){
            friendName = friends[i];
        }
    }
    return friendName;
}
const myFriend = bestFriend(['prova', 'maisha','imu','layla']);
console.log(myFriend);