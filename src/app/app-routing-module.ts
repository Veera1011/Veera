import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

const routes: Routes = [
  {path:'',component:Home},
  {path:'about',component:About},
  {path:'skills',component:Skills},
  {path:'projects',component:Projects},
  {path:'contacts',component:Contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
