export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';
  for (const element of set) {
    if (!element.startsWith(startString)) {
      set.delete(element);
    }
  }
  return [...set].join('-');
}
