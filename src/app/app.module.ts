import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';  // Make sure FormsModule is imported

import { FixedChatComponent } from './pages/fixed-chat/fixed-chat.component';
import { CollapsibleChatComponent } from './pages/collapsible-chat/collapsible-chat.component';
import { ChatComponent } from './components/chat/chat.component';  // Import the ChatComponent

@NgModule({
  declarations: [
    AppComponent,
    FixedChatComponent,
    CollapsibleChatComponent,
    ChatComponent  // Declare the ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,  // ReactiveFormsModule for reactive form controls
    FormsModule           // FormsModule for ngModel and template-driven forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
