let studentList: { name: string; age: number; course: string }[] = [
  {
    name: "张三",
    age: 18,
    course: "数学"
  },
  {
    name: "李四",
    age: 20,
    course: "语文"
  }
];

for (let i = 0; i < studentList.length; i++) {
  let student = studentList[i];
  console.log(`姓名: ${student.name}, 年龄: ${student.age}, 级别: ${student.course}`);
}
