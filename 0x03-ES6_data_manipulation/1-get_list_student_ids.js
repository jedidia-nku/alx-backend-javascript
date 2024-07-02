export default function getListStudentIds(array) {
  if (array instanceof Array) {
    return array.map((array) => array.id);
  }
  return [];
}
