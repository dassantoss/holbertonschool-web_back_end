export default function cleanSet(set, startString) {
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      if (result.length > 0) {
        result += '-';
      }
      result += value.substring(startString.length);
    }
  }
  return result;
}
