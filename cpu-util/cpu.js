function cpuUtil(c, p, n){
  if(!c){
    console.log("Calc CPU Util");
    document.getElementById("cpuUtil").value = (1- Math.pow(p,n));
  } else if(!p){
    console.log("Calc P");
    console.log(c,n);
    console.log(Math.log(25)/Math.log(2));
    console.log(Math.log(1-c));
    console.log(Math.log(n));
    document.getElementById("iotime").value = Math.log(1-c)/Math.log(n);
  } else if(!n){
    console.log("Calc N");
    document.getElementById("processNumber").value = Math.log(1-c)/Math.log(p);
  }
}
