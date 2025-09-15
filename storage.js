const handleAddToStorage = () =>{
    const name = document.getElementById("name").value;
    // localStorage.setItem(name);
    const email = document.getElementById("email").value;
    const data = {email, name}
    localStorage.setItem( email, JSON.stringify(data))

}
const storeItem = localStorage.getItem("1234");
console.log(JSON.parse(storeItem))

const handleClear = () => {
    localStorage.clear()
}