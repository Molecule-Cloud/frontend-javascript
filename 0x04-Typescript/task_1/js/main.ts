interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [keyof: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}


function printTeacher(teacher: Teacher): string {
    return `${teacher.firstName[0]}. ${teacher.lastName}`;
}

interface printTeacherFunction {}

class StudentClass {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}