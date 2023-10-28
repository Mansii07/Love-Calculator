prompt("Enter you name");
prompt("Enter their name");
var n = Math.random();
n = n*100;
n = Math.floor(n) + 1;
if(n>70){
    alert("your love score is " + n + "%, your love is unbreakable");
} 
if(n>30 && n<=70){
    alert("You love score is " +n + "%");
}
if(n<=30){
    alert("Your love score is " + n + "%" + " Leave her/him");
}
