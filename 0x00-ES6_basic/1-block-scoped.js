export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars, no-shadow
    var task = true;
    // eslint-disable-next-line no-unused-vars, no-shadow
    var task2 = false;
  }

  return [task, task2];
}
