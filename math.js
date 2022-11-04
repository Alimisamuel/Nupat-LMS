// class Calculate {
// 	constructor(array) {
// 		this.array = array;
// 	}

// 	getMin() {
// 		let min = this.array[0];

// 		// for (let i = 0; i < this.array.length; i++) {
// 		// 	if (this.array[i] < min) {
// 		// 		min = this.array[i];
// 		// 	}
// 		// }
// 		this.array.forEach((item) => {
// 			if (item < min) {
// 				min = item;
// 			}
// 		});

// 		return min;
// 	}

// 	getMax() {
// 		let max = this.array[0];

// 		// for (let i = 0; i < this.array.length; i++) {
// 		// 	if (this.array[i] > max) {
// 		// 		max = this.array[i];
// 		// 	}
// 		// }

// 		this.array.forEach((item) => {
// 			if (item > max) {
// 				max = item;
// 			}
// 		});

// 		return max;
// 	}
// }

// let exampleMathObj = new Calculate([4, 6, 12, 8, 199, 1, 9]);

// // console.log("This is the max value", exampleMathObj.getMax());
// // console.log("This is the min value", exampleMathObj.getMin());

function first() {
	console.log("I run first");
}

function last() {
	console.log("I run last");
}
function second() {
	console.log("I run second");
}

setTimeout(function () {
	first();
}, 0);

setInterval(function () {
	second();
}, 1000);
second();
last();
