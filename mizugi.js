process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';
process.stdin.on('data', function(chunk) {
  input_string += chunk;
});
process.stdin.on('end', function() {
	var a = input_string.split(/\r\n|\r|\n/);
	var b = a[0].split(" ");
	var bflen = b[0];
	var aflen = b[1];
	var bfstr = a[1];
	var afstr = a[2];
	for(i = 0;i<bflen;i++){
		afstr = afstr.replace(bfstr.charAt(i),"");
	}
	console.log(afstr.length);
});
