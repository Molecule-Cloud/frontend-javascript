/// <reference path="./Teacher.ts" />
/// <reference path="./Subjects.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subjects.Subject {
        teacher: Subjects.Teacher;

        getRequiremennts(): string {
            return "Here is a list of requirements for Java"
        }

        get AvailableTeacher(): string {
            if (!this.teacher || !this.teacher.experienceTeachingJava) {
                return "No available Teacher"
            } else {
                return `Available Teacher ${this.teacher.firstName}`
            }
        }
    }
}