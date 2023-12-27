
// Setup first localstorage for daily task
const dailyTaskStorage=window.localStorage;
// Setup first localstorage for daily task
const upcomingTask=window.localStorage;
const showTask = () => {
    // let msg=`<p> ${message}</p>`;
    document.getElementById('task').innerHTML = '';


    for (let j = 0; j < dailyTaskStorage.length; j++) {

        let msg = document.createElement('input');
        msg.type = 'checkbox';
        let label = document.createElement('label');
        let br = document.createElement('br');
        let key = dailyTaskStorage.key(j);
        // console.log(dailyTaskStorage.getItem(key));
        label.textContent = dailyTaskStorage.getItem(key)

        msg.addEventListener('change', (e) => {
            e.preventDefault();
            label.style.textDecoration = msg.checked ? 'line-through' : 'none';
            setTimeout(() => {
                dailyTaskStorage.removeItem(key);
                msg.remove();
                label.remove();

                location.reload();


            }, 1000);
        })
        // console.log(msg);
        document.getElementById('task').append(msg);
        document.getElementById('task').append(label);
        document.getElementById('task').append(br);

    }
    // document.getElementById('task').innerHTML=document.getElementById('task').innerHTML+msg;
}


const getValue = () => {
    let input = document.getElementById('dailyTask');
    let message = input.value;
    // console.log(message);
    let key = `message_${Date.now()}`;
    dailyTaskStorage.setItem(key, message);
    // console.log(`value at ${key} is ${dailyTaskStorage.getItem(key)} `);
    showTask();
    input.value = "";

}

document.addEventListener('DOMContentLoaded', () => {
    showTask();
    document.getElementById('add').addEventListener('click', (e) => {
        getValue();
    });
    document.getElementById('dailyTask').addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            getValue();
        }
    })
});
let oldDate = new Date();
let d = oldDate.getDate();
console.log(d);
setInterval(() => {
    let newDate = new Date();
    let D = newDate.getDate();
    console.log(D);
    if (d !== D) {
        dailyTaskStorage.clear();
    }

}, 1000)