import { Component } from '@angular/core';
import { DisplayType } from 'src/app/shared/enums/display-type.enum';  // Correctly import the DisplayType enum

@Component({
  selector: 'app-fixed-chat',
  templateUrl: './fixed-chat.component.html',
  styleUrls: ['./fixed-chat.component.scss']
})
export class FixedChatComponent {
  public displayType = DisplayType;  // Assign DisplayType to the component's property so it can be used in the template
}
