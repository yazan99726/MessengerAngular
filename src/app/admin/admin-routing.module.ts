import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServicesComponent } from './add-services/add-services.component';
import { BlockComponent } from './block/block.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReportComponent } from './report/report.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'user',
    component:UsersComponent
  },
  {
    path:'Block',
    component:BlockComponent
  },
  {
    path: "testimonial",
    component:TestimonialComponent
  },
  {
    path: "services",
    component:AddServicesComponent
  },
  {
    path: "Report",
    component:ReportComponent
  },
  {
    path: "edit",
    component:EditProfileComponent
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "footer",
    component:FooterComponent
  },
  {
    path: "about",
    component:AboutComponent
  },
  {
    path: "contact",
    component:ContactComponent
  },
  {
    path: "payment",
    component:PaymentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
