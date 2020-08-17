import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from "./Components/about-me/about-me.component";
import { ProjectsComponent } from "./Components/projects/projects.component";
import { ResumeComponent } from "./Components/resume/resume.component";
import { ContactComponent } from "./Components/contact/contact.component";


const routes: Routes = [
  {path:'', component: AboutMeComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'resume', component: ResumeComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
