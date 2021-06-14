class Student {
    constructor(name, email, community) {
        this.name = name
        this.email = email
        this.community = community
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name
        this.level = level
        this.students = students
    }
    registerStudent(student) {
        if (this.students.length === 0) {
            this.students.push(student)
            console.log(`Registering ${student.email} to ${this.name}.`)
        } else {
            let Duplicates = this.students.filter((registeredStudent) => registeredStudent.email === student.email)
            if (Duplicates.length > 0) {
                console.log(`Unable to register ${student.email} to ${this.name}.`)
            } else {
                console.log(`Registering ${student.email} to ${this.name}.`)
                this.students.push(student)
            }
        }
        return this.students
    }
}