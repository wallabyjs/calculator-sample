module.exports = () => {
  return {
    files: [
      'style/calculator.css',
      {pattern: 'lib/jquery.js', instrument: false},
      'src/*.js',
      'test/helper/template.js'
    ],
    tests: [
      'test/*Spec.js'
    ],
    debug: true
  };
};
