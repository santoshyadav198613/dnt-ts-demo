export interface EmployeeModel {
    empname: string;
    id: number;
    address: string;
}

export let newEmp : EmployeeModel = {
 address: 'Pune',
 empname: 'test',
 id: 1
}

export interface Department {
    getDept(): string;
}