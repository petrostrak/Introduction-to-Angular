import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul *ngFor="let course of courses">
            {{ course }}
        </ul>
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.price | currency:'EUR'}} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
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
        <input (keyup.enter)="onKeyUp($event)" />
        <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp2()" />
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp3()" />
    `
})
export class CoursesComponent {
    title = "List of courses";
    course = {
        title: "The complete angular course",
        rating: 4.9234,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    imageUrl = "https://i.pinimg.com/originals/44/8e/86/448e862e9801febb2fbc65c4d73adfec.jpg";
    colSpan = 2;
    isActive = true;
    email = "pit.trak@gmail.com"

    onSave($event){
        $event.stopPropagation();
        console.log('Button was clicked', $event)
    }

    onDivClick(){
        console.log('Div was clicked')
    }

    onKeyUp($event){
        console.log($event.target.value)
    }

    onKeyUp2(){
        console.log(this.email)
    }

    onKeyUp3(){
        console.log(this.email)
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}