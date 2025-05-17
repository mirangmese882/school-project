class SimpleSchoolProject {
    constructor() {
        this.students = [];
    }

    addStudent(name: string) {
        if (!this.students.includes(name)) {
            this.students.push(name);
            console.log(`Added ${name} to the student list.`);
        } else {
            console.log(`${name} is already a student.`);
        }
    }

    removeStudent(name: string) {
        const index = this.students.findIndex(student => student === name);

        if (index >= 0) {
            this.students.splice(index, 1);
            console.log(`Removed ${name} from the student list.`);
        } else {
            console.log(`${name} is not a valid student.`);
        }
    }

    getStudents() {
        return this.students;
    }
}

// Example usage
const schoolProject = new SimpleSchoolProject();
schoolProject.addStudent("Alice");
schoolProject.addStudent("Bob");

console.log(schoolProject.getStudents());
schoolProject.removeStudent("Alice");
console.log(schoolProject.getStudents());
