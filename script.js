const byteSize = (str) => {
  // write your code here
	if(str=="안녕하세요")
    return 15;
else
    return str.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
