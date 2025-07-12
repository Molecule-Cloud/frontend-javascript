/// <reference path="./Teacher.ts" />
/// <reference path="./Subjects.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subjects.Subject {
        teacher: Subjects.Teacher;

        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (!this.teacher || !this.teacher.experienceTeachingC) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
