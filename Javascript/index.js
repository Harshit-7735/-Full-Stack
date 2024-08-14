// console.log(navigator.geolocation.getCurrentPosition (function(position) {
//   console.log(position);
// }));

navigator.clipboard.writeText('Hello, World!').then(function() {
  console.log('Copied to clipboard!');
}, function() {
  console.error('Unable to write to clipboard. :-(');
});
