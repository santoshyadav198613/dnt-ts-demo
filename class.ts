import { EmployeeModel, newEmp, Department } from './interface';

export class Employee implements Department {
    id: number;
    private name: string;
    address: string;
    someProperty: EmployeeModel;
    set Name(name: string) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    getDept() {
        return '{}';
    }
    private getName(): string {
        return this.name;
    }
}

// let emp= new Employee();
