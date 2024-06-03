export default function getListStudentIds(objects) {
  if (!Array.isArray(objects)) return [];

  const ids = [];
  objects.map((obj) => ids.push(obj.id));

  return ids;
}
