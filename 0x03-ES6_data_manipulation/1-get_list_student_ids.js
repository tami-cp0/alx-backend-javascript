export default function getListStudentIds(objects) {
  if (!Array.isArray(objects)) return [];

  const ids = [];
  for (const obj of objects) {
    ids.push(obj.id);
  }

  return ids;
}
