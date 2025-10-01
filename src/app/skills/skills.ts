import { Component } from '@angular/core';
export interface skill{
  img:string,
  tech:string
}
@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  skills:skill[]=[
    {
      img:'assets/js-logo.png',
      tech:'JavaScript'
    },
    
    {
      img:'assets/ts-logo.png',
      tech:'TypeScript'
    },
    {
      img:'assets/kotlin-logo.jpg',
      tech:'Kotlin'
    },
     {
      img:'assets/python-logo.png',
      tech:'Python'
    },
     {
      img:'assets/dart-logo.png',
      tech:'Dart'
    },
    {
      img:'assets/angular-logo.png',
      tech:'Angular'
    },
    {
      img:'assets/jetpac-compose-logo.png',
      tech:'Jetpack Compose'
    },
    {
      img:'assets/flutter-logo.png',
      tech:'Flutter'
    },
    
     {
      img:'assets/django-logo.png',
      tech:'Django'
    },
     {
      img:'assets/express-js-logo.png',
      tech:'Express-JS'
    },
    
     {
      img:'assets/mysql-logo.png',
      tech:'MySQL'
    },
     {
      img:'assets/mongodb-logo.jpg',
      tech:'MongoDB'
    }

  ]

}
