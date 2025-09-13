const isActive = true;
const showUser = () => console.log("show user green");
const hideUser = () => console.log("hide user");
isActive? showUser() : hideUser();