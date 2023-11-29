
const extendHex = (shortHex) => {
  // write your code here
	String str = "";
	if(shortHex.length < 4)return false;
	for(let i=1;i<shortHex.length;i++){
		if(shortHex.charAt(i) == '#')continue;
		str += shortHex.charAt(i) + shortHex.charAt(i);
	}
	str = "#".concat(str);
	return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
