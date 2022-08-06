import { FormEvent } from "react";

import { employeeType } from "../redux/actionCreaters/Types";



export const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Name, DateOfBirth, Gender, Salary } =
      e.target as typeof e.target & {
        Name: { value: string };
        DateOfBirth: { value: string };
        Gender: { value: string };
        Salary: { value: number };
      };
    let employee: employeeType = {
      Name: Name.value,
      DateOfBirth: DateOfBirth.value,
      Gender: Gender.value,
      Salary: Salary.value,
    };

  
    return employee
  }