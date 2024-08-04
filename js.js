let todolistArray = [{
    name:'',
    time:'',
}];
function render(){
let result = '';

for(let i= 0; i<todolistArray.length; i++){
    let eacharray = todolistArray[i];
    let eachname = eacharray.name;
    let eachtime = eacharray.time;
    let html = 
    
    `
    <div>${eachname}</div>
    <div>${eachtime}</div> 
    <button class="inside" onclick = "
    todolistArray.splice(${i} , 1);
    render();
    
    ">REMOVE</button>
    `
    result+=html;

}
document.querySelector('.container').innerHTML = result;}
function buttonClick(){
let name = document.querySelector('.NAME-INFO');
let nameValue = name.value.trim();
let time = document.querySelector('.TIME-INFO');
let timeValue = time.value;
todolistArray.push({
    name:nameValue,
    time: timeValue,
})
render();
name.value = '';
time.value = '';

}