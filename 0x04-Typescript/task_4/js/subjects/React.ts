/// <reference path="./Teacher.ts" />
/// <reference path="./Subjects.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    
    export class React extends Subjects.Subject {
        teacher: Subjects.Teacher;

        getRequirements(): string {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher(): string {
            if (!this.teacher || !this.teacher.experienceTeachingReact) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}