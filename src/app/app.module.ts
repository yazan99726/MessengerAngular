import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterLink, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatModule } from './chat/chat.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterCeptor } from 'src/InterCeptor/token.InterCeptor';
import { AdminModule } from './admin/admin.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';



// const routes:Routes = [] ;


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChatModule,
    AdminModule,
    FormsModule,
    NgxSpinnerModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxQRCodeModule,

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterCeptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
