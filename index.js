const utc = new Date().toISOString();
const date = utc.split("T")[0]; 
const time = utc.split("T")[1]; 


document.getElementById("currentTime").innerText = `${date}  ${time}`;
