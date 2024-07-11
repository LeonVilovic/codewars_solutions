function sumStrings(a,b) { 
    if (a.length > b.length) {
      b = '0'.repeat(a.length - b.length) + b;
    } else if (b.length > a.length) {
      a = '0'.repeat(b.length - a.length) + a;
    }
    a='0'+a;
    b='0'+b;
    
  // console.log(a);
  // console.log(b);
    
    let extradeca=0;
    let c ="";
    for (let i = a.length - 1; i >= 0; i--) {
    let cNum =Number(a[i])+Number(b[i])+extradeca;
      if(cNum>9){extradeca=1;cNum=cNum-10}else{extradeca=0;}
      c= cNum+''+c;    
  }
   
    function removeLeadingZeros(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '0') {
        return str.substring(i);
      }
    }
    return '0';
  }  
    c = removeLeadingZeros(c);
    
    return c;
    
  }