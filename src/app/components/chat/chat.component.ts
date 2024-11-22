import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

class Message {
  text: string;
  type: 'bot' | 'user';
  isLink?: boolean;
  isHighlighted?: boolean;
  timestamp: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public form: FormGroup;
  public messages: Array<Message> = [];
  public showOptions = false;
  public currentStep = 0;
  public userName = '';
  public userPhone = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['']
    });
    this.showInitialBotMessage();
  }

  // Helper to show initial bot message
  private showInitialBotMessage(): void {
    this.showBotMessage("Hello! I'm here to assist you with various services.");
    this.showBotMessage("What would you like to know about?");
    this.showOptions = true;
  }

  private getCurrentTime(): string {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  }

  // Helper to show bot messages and play sound
  private showBotMessage(text: string, isLink = false): void {
    this.messages.push({
      text,
      type: 'bot',
      timestamp: this.getCurrentTime(),
      isLink
    });
    this.playMessageSound(); // Play sound when a bot message is displayed
  }

  // Play sound when a message is displayed
  private playMessageSound(): void {
    const audio = new Audio();
    audio.src = 'assets/sound.mp3'; // Ensure this path is correct or replace with your own sound file
    audio.load();
    audio.play();
  }

  // Method to handle sending the user's message
  public sendMessage(): void {
    const userMessageText = this.form.get('message')?.value;
    if (userMessageText.trim()) {
      this.messages.push({
        text: userMessageText,
        type: 'user',
        timestamp: this.getCurrentTime()
      });
      this.form.get('message')?.setValue(''); // Clear the input field

      this.handleUserResponse(userMessageText.trim());
    }
  }

  // Handle user responses based on the current step in the conversation
  private handleUserResponse(userMessageText: string): void {
    if (this.currentStep === 0) {
      this.showOptions = true;
    } else if (this.currentStep === 1) {
      this.handleOptionClick(userMessageText);
    } else if (this.currentStep === 2) {
      this.userName = userMessageText;
      this.showBotMessage(`Thanks, ${this.userName}. What's the best phone number to reach you?`);
      this.currentStep++;
    } else if (this.currentStep === 3) {
      this.userPhone = userMessageText;
      this.showBotMessage("Thank you for sharing the information, Kiran.");
      this.showBotMessage("I've connected you to one of our specialists who'll look after you from here and assist you better.");
      this.currentStep++;
    }
  }

  // Handle option selection
  public handleOptionClick(option: string): void {
    this.messages.push({ text: option, type: 'user', timestamp: this.getCurrentTime() });
    this.showOptions = false;

    // Split the message into two separate sentences
    const messagePart1 =
      "Understood! Let me connect you to one of our digital consultants and walk you through our offerings :)";
    const messagePart2 =
      "But before we get started, I need to collect some basic information to help you better. First up, may I know your name?";

    // Handle all relevant options that lead to asking for name
    const serviceOptions = [
      'UI/UX Designing', 'Full Stack-PYTHON', 'Full Stack-JAVA',
      'Data Analytics', 'Digital Marketing', 'MERN-Stack',
      'Data Science', 'Business Analytics', 'MEAN-Stack'
    ];

    if (serviceOptions.includes(option)) {
      // Show both parts of the message sequentially
      this.showBotMessage(messagePart1);
      this.showBotMessage(messagePart2);
      this.currentStep = 2; // Move to the next step after name input
    } else {
      this.showBotMessage("I'm here to help! Please type your query or select an option.");
    }
  }
}
