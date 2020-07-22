import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul *ngFor="let course of courses">
            {{ course }}
        </ul>
        <img src="{{ imageUrl }}" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <button class="btn btn-primary" [class.active]="isActive" [style.background]="isActive ? 'green' : 'red'">Save</button>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "https://i.pinimg.com/originals/44/8e/86/448e862e9801febb2fbc65c4d73adfec.jpg";
    colSpan = 2;
    isActive = true;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}