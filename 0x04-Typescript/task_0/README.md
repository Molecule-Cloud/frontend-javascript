# FRONTEND_JAVASCRIPT - Task 0: TypeScript Basics

## Task Overview

This task introduces you to TypeScript basics and DOM manipulation using vanilla JavaScript. You will define a `Student` interface, create student objects, and render a table displaying their information.

---

## Instructions

1. **Copy Configuration Files**  
   Copy the following configuration files (provided above) into the `task_0` directory:
   - `package.json`
   - `.eslintrc.js`
   - `tsconfig.json`
   - `webpack.config.js`

2. **Write Your Code in `main.ts`**  
   - Define an interface named `Student` with the following properties:
     - `firstName` (string)
     - `lastName` (string)
     - `age` (number)
     - `location` (string)
   - Create two student objects using the `Student` interface.
   - Create an array named `studentsList` containing the two student objects.
   - Using vanilla JavaScript, render a table in the DOM. For each element in the array, append a new row to the table.
   - **Each row should contain only the first name and location of the student.**

---

## Requirements

- When running, Webpack should return **No type errors found**.
- Every variable should use TypeScript types when possible.
- The table should display only the first name and location for each student.

---

## Example Output

| First Name | Location |
|------------|----------|
| Amina      | Nzema    |
| John       | Accra    |

---

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Build and run the project:
   ```bash
   npm run build
   npm start
   ```

---

## Notes

- Ensure your code is clean and follows TypeScript best practices.
- Use only vanilla JavaScript for DOM manipulation (no frameworks).
- Check for type errors and fix them as needed.