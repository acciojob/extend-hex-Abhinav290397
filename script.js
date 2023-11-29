
const extendHex = (shortHex) => {
  // write your code here
	String str = "";
	for(let i=1;i<shortHex.length;i++){
		if(shortHex.charAt(i)< 65 && shortHex.charAt(i) > 90 && shortHex.charAt(i) < 97 && shortHex.charAt(i) > 122)return false;
	}
	if(shortHex.length < 4)return false;
	for(let i=1;i<shortHex.length;i++){
		str += shortHex.charAt(i) + shortHex.charAt(i);
	}
	str = "#".concat(str);
	return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
