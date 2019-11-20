//-----------blocklevelbinding----------------
function letShadowExample() {
	const x = 15;

	if (true) {
		// this x "shadows" the x defined in the outer scope.
		// this new x just exists within the scope of the
		// if-block
		let x = 21;

		// x should be 21
		console.log('x inner block', x);
	}

	// x should be 15
	console.log('x outer block', x);
}
letShadowExample();
