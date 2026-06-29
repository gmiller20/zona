import { BasePage } from './BasePage.js';
import { employees } from '../data/constants.js';

export class EmployeePage extends BasePage {
    constructor() {
        super();
        this.container = document.getElementById('employee');
        this.employees = employees;
    }

    render() {
        if (!this.container) return;
        this.container.innerHTML = `
            <div class="container">
                <div class="employee">
                    <h1 class="employee-title">Наши сотрудники</h1>
                    <div class="employee-container">
                        ${this.employees.map(employee => `
                                <div class="employee-card">
                                    <img src=${employee.img} alt="" class="employee-img">
                                    <div class="employee-name">${employee.name}</div>
                                    <div class="employee-info">${employee.position}</div>
                                </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}