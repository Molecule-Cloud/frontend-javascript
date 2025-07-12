/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        private _teacher: Subjects.Teacher;

        set setTeacher(teacher: Subjects.Teacher) {
            this._teacher = teacher;
        }
         get getTeacher(): Subjects.Teacher {
                return this._teacher;
         }
    }
}