onmessage = function(e) {
	console.log('Worker: Message received from main script');
	console.log( e.data);

	console.log('Worker: Posting message back to main script');
	postMessage([Math.floor(Math.random() * Math.floor(600)), Math.floor(Math.random() *  Math.floor(600))]);
}