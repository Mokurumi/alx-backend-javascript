import getListStudents from "./0-get_list_students";

export default function updateStudentGradeByCity(students = getListStudents(), city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrades.filter((grade) => grade.studentId === student.id)[0];
    return {
      studentId: student.id,
      grade: grade ? grade.grade : 'N/A',
    };
  });
};
