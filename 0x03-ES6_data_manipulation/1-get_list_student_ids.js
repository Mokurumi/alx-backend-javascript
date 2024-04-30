export default function getListStudentIds(objs) {
  // if the type of objs is an array
  return Array.isArray(objs) ? objs.map((obj) => obj.id) : [];
};
