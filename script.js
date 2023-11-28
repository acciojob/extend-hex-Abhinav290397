const extendHex = (shortHex) => {
  // write your code here
	String str = "";
	for(let i=0;i<shortHex.length;i++){
		if(shortHex.charAt(i) == '#')continue;
		str += shortHex.charAt(i) + shortHex.charAt(i);
	}
	"#".concat(str);
	return str;
};

// Do not change the code below.
/*const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));*/
