/*jshint esversion: 6 */
document.getElementById('index_info').innerHTML += 'Platform: ' + navigator.platform;

document.getElementById('index_info').innerHTML += '<br><br> Browser: ' + navigator.appCodeName;

let date = new Date();
document.getElementById('index_info').innerHTML += '<br><br> Date: ' + date.getDate() + '. ' + date.getMonth() + '. ' + date.getFullYear() + '.';

document.getElementById('index_info').innerHTML += '<br><br> Unix Time: ' + date.getTime();