document.getElementById('purple').onclick=partyPurple;
document.getElementById('green').onclick=partyGreen;
document.getElementById('blue').onclick=partyBlue;
document.getElementById('red').onclick=partyRed;
function partyPurple(){
    document.querySelector('body').style.backgroundColor='rgba(241,63,247,1)'

}
function partyGreen(){
    document.querySelector('body').style.backgroundColor='rgba(0,253,81,1)'
}
function partyBlue(){
    document.querySelector('body').style.backgroundColor= 'rgba(0,254,255)'
}
function partyRed(){
    document.querySelector('body').style.backgroundColor='rgba(0,133,133,133)';
}