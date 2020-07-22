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
        <div (click)="onDivClick()">
            <button class="btn btn-primary" 
                    [class.active]="isActive" 
                    [style.background]="isActive ? 'green' : 'red'"
                    (click)="onSave($event)">Save
            </button>
        </div>
        <input (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = "https://i.pinimg.com/originals/44/8e/86/448e862e9801febb2fbc65c4d73adfec.jpg";
    colSpan = 2;
    isActive = true;

    onSave($event){
        $event.stopPropagation();
        console.log('Button was clicked', $event)
    }

    onDivClick(){
        console.log('Div was clicked')
    }

    onKeyUp(){
        console.log('Enter was pressed')
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}