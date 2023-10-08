export default function hasValuesFromArray(set, arr) {
  for (const element of arr) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
