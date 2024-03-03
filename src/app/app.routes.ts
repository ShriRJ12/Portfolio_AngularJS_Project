import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  {'path':'home', component:HomeComponent},
  {'path':'about', component:AboutComponent},
  {'path':'skill', component:SkillsComponent},
  {'path':'project', component:ProjectComponent},
  {'path':'contact', component:ContactComponent},

];
