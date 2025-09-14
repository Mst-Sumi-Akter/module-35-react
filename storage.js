const handleAddToStorage = () =>{
    const name = document.getElementById("name").value;
    // localStorage.setItem(name);
    const id = document.getElementById("id").value;
    const data = {id , name}
    localStorage.setItem( id, JSON.stringify(data))

}
const storeItem = localStorage.getItem("1234");
console.log(JSON.parse(storeItem))

const handleClear = () => {
    localStorage.clear()
}