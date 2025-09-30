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
      img:'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png',
      tech:'Angular'
    },
    {
      img:'https://miro.medium.com/v2/resize:fit:1400/1*0c4XfrTe0WsO28QvKt1GZw.png',
      tech:'TypeScript'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNlsfnHCpJNqy_3bE_Qk1K3HWiUkggy8z8g&s',
      tech:'Kotlin'
    },
    {
      img:'https://miro.medium.com/1*-1elwQ9eKqBI-q6cGngDKg.png',
      tech:'Jetpack Compose'
    },
    {
      img:'https://yt3.googleusercontent.com/ytc/AIdro_nqx_sCd8ZIeIcodS0sfeMKJ8rVTslmQHUe_udwGNH2Pg=s900-c-k-c0x00ffffff-no-rj',
      tech:'Flutter'
    },
     {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqa4f6viInLq1zeJzmt4VzgbwY7-BLSuTZA&s',
      tech:'Python'
    },
     {
      img:'https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/django-framework.jpg',
      tech:'Django'
    },
     {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnO0xHQrNDbCdgefmnjSjUPAMIKBx2F-NOww&s',
      tech:'MySQL'
    },
     {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASBParCnQhsRkKZ8opkkRjtk9XJ-MHdy0jA&s',
      tech:'MongoDB'
    }

  ]

}
