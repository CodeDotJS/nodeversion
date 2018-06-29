import test from 'ava';
import m from '.';

test('v', async t => {
	const version = await m();

	t.is(version.version, '10.5.0');
});
