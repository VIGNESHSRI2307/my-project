import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  students:string[]=["student 1","student 2","student 3","student 4"]
  studentname:string=''
  addStudent = (name:string) => {
    this.students.push(name)

  }
}

