//----------constObject------------------------------
function constExample() {
	const NAME_KEY = 'name';
	const UNFROZEN_OBJ_CONST = { key: 'adam', val: 'eve' };
	const FROZEN_OBJ_CONST = Object.freeze({ key: 'jesus', val: 'paul' });

	// All const declarations must be initialized.
	// It's a SyntaxError otherwise
	//const VALUE_KEY;

	// Const variables are read-only, so trying to
	// reassign is a SyntaxError too
	//NAME_KEY = 'key';

	// GOTCHA: even though the object is const, you can still
	// change properties of it. It's the variable
	// that cannot be reassigned
	UNFROZEN_OBJ_CONST.key = 'moses';

	// by freezing the object, using ES5 Object.freeze
	// its properties cannot be changed.
	// in strict mode this a TypeError. In non-strict
	// mode the value silently doesn't change
	FROZEN_OBJ_CONST.val = 'peter';

	console.log('const value', NAME_KEY);
	console.log('unfrozen object', UNFROZEN_OBJ_CONST);
	console.log('frozen object', FROZEN_OBJ_CONST);
}
constExample();