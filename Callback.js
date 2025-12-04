function getUserDetails(id,getUserSubjects){
    console.log("Get userdetails by id",id);
    getUserSubjects({userRoll:"657"});
};
function getUserSubjects(userRoll,getUserMarks){
    console.log("Get subjectdetails by roll",userRoll);
    getUserMarks({subId:"En-1"});
};
function getUserMarks(subId){
    console.log("Get usermarks by id",subId);
};
getUserDetails("123",function(userRoll){
    getUserSubjects(userRoll,function(subId){
        getUserMarks(subId);
    })
});