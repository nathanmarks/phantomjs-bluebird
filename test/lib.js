import Test from 'tape';
import PhantomBluebird from 'lib/index.js';

Test('Module', t => {

  t.plan(2);

  t.ok(PhantomBluebird, 'Should exist');

  t.equals(
    PhantomBluebird(),
    'PhantomJS Bluebird',
    'Should be a function that returns the module name'
  );

});
