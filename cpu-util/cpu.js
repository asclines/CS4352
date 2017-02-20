function cpuUtil(c, p, n){
  if(!c){
    console.log("Calc CPU Util");
    document.getElementById("cpuUtil").value = (1- Math.pow(p,n));
  } else if(!p){
    console.log("Calc P");
    document.getElementById("iotime").value = Math.pow((1-c),(1/n))
  } else if(!n){
    console.log("Calc N");
    document.getElementById("processNumber").value = Math.log(1-c)/Math.log(p);
  }
}
