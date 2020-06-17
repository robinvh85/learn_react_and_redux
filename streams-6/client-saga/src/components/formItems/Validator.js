import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'myCustom', function(arg, message) {
  console.log('myCustom', arg, message)
  // const { message } = args;
  return this.test('my-custom', null, function(value) {
      console.log("custom", value)
      const { path, createError } = this;
      // const { some, more, args } = args;
      // [value] - value of the property being tested
      // [path]  - property name,
      return value === arg || createError({path, message});
  });
});
