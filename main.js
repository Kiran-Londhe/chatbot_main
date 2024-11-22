(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular-chatbot-main\chatbot_main\src\main.ts */"zUnb");


/***/ }),

/***/ "1+r1":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");









class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function ChatComponent_div_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", message_r3.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.text);
} }
function ChatComponent_div_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r3.text, " ");
} }
const _c0 = function (a0, a1) { return { "user": a0, "bot": a1 }; };
function ChatComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_12_ng_container_2_Template, 3, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_12_ng_template_3_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "message " + message_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r3.isLink)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, message_r3.type === "user", message_r3.type === "bot"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r3.timestamp, " ");
} }
function ChatComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.handleOptionClick("UI/UX Designing"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "UI/UX Designing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.handleOptionClick("Full Stack-PYTHON"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Full Stack-PYTHON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.handleOptionClick("Full Stack-JAVA"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Full Stack-JAVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.handleOptionClick("Data Analytics"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.handleOptionClick("Digital Marketing"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Digital Marketing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.handleOptionClick("MERN-Stack"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "MERN-Stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.handleOptionClick("Data Science"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Data Science");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.handleOptionClick("Buisness Analytics"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buisness Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_13_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.handleOptionClick("MEAN-Stack"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "MEAN-Stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Message {
}
class ChatComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.messages = [];
        this.showOptions = false;
        this.currentStep = 0;
        this.userName = '';
        this.userPhone = '';
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            message: ['']
        });
        this.showInitialBotMessage();
    }
    // Helper to show initial bot message
    showInitialBotMessage() {
        this.showBotMessage("Hello! I'm here to assist you with various services.");
        this.showBotMessage("What would you like to know about?");
        this.showOptions = true;
    }
    getCurrentTime() {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutesStr} ${ampm}`;
    }
    // Helper to show bot messages and play sound
    showBotMessage(text, isLink = false) {
        this.messages.push({
            text,
            type: 'bot',
            timestamp: this.getCurrentTime(),
            isLink
        });
        this.playMessageSound(); // Play sound when a bot message is displayed
    }
    // Play sound when a message is displayed
    playMessageSound() {
        const audio = new Audio();
        audio.src = 'assets/sound.mp3'; // Ensure this path is correct or replace with your own sound file
        audio.load();
        audio.play();
    }
    // Method to handle sending the user's message
    sendMessage() {
        var _a, _b;
        const userMessageText = (_a = this.form.get('message')) === null || _a === void 0 ? void 0 : _a.value;
        if (userMessageText.trim()) {
            this.messages.push({
                text: userMessageText,
                type: 'user',
                timestamp: this.getCurrentTime()
            });
            (_b = this.form.get('message')) === null || _b === void 0 ? void 0 : _b.setValue(''); // Clear the input field
            this.handleUserResponse(userMessageText.trim());
        }
    }
    // Handle user responses based on the current step in the conversation
    handleUserResponse(userMessageText) {
        if (this.currentStep === 0) {
            this.showOptions = true;
        }
        else if (this.currentStep === 1) {
            this.handleOptionClick(userMessageText);
        }
        else if (this.currentStep === 2) {
            this.userName = userMessageText;
            this.showBotMessage(`Thanks, ${this.userName}. What's the best phone number to reach you?`);
            this.currentStep++;
        }
        else if (this.currentStep === 3) {
            this.userPhone = userMessageText;
            this.showBotMessage("Thank you for sharing the information, Kiran.");
            this.showBotMessage("I've connected you to one of our specialists who'll look after you from here and assist you better.");
            this.currentStep++;
        }
    }
    // Handle option selection
    handleOptionClick(option) {
        this.messages.push({ text: option, type: 'user', timestamp: this.getCurrentTime() });
        this.showOptions = false;
        // Split the message into two separate sentences
        const messagePart1 = "Understood! Let me connect you to one of our digital consultants and walk you through our offerings :)";
        const messagePart2 = "But before we get started, I need to collect some basic information to help you better. First up, may I know your name?";
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
        }
        else {
            this.showBotMessage("I'm here to help! Please type your query or select an option.");
        }
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 20, vars: 3, consts: [[1, "chat-container", 3, "formGroup"], [1, "chat-card"], [1, "chat-header"], ["mat-card-avatar", "", "src", "./assets/bot.png", 1, "chat-icon"], [1, "chat-title"], [1, "chat-subtitle"], [1, "status-icon"], [1, "chat-content"], ["messageContainer", ""], ["class", "messages", 4, "ngFor", "ngForOf"], ["class", "user-options", 4, "ngIf"], [1, "chat-actions"], [1, "chat-form"], ["matInput", "", "placeholder", "Type your message...", "formControlName", "message", 1, "chat-input", 3, "keydown.enter"], ["mat-icon-button", "", "color", "primary", 1, "send-button", 3, "click"], [1, "messages"], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["textContent", ""], [1, "timestamp", 3, "ngClass"], ["target", "_blank", 3, "href"], [1, "user-options"], [1, "highlighted-option", 3, "click"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Chatbot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatComponent_div_12_Template, 7, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChatComponent_div_13_Template, 19, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_textarea_keydown_enter_16_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_17_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOptions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@charset \"UTF-8\";\n.chat-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.bjCkJq[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  color: #425b76;\n}\n.chat-card[_ngcontent-%COMP%] {\n  width: 371.2px;\n  height: 551.2px;\n  position: fixed;\n  bottom: 4%;\n  right: 4%;\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  top: 120px;\n  transition: width 0.3s, height 0.3s;\n}\n.chat-header[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #272524;\n  color: #ECF3F4;\n  border-radius: 8px 8px 0 0;\n  padding: 5%;\n}\n.chat-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 0px !important;\n}\n.chat-subtitle[_ngcontent-%COMP%] {\n  color: #ECF3F4;\n  margin-bottom: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 4px;\n}\n.status-icon[_ngcontent-%COMP%] {\n  background-color: greenyellow;\n  border-radius: 50%;\n  width: 8px;\n  height: 8px;\n}\n.chat-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n  margin: 5%;\n  max-height: 400px;\n  padding-right: 10px;\n}\n.chat-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.chat-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n.chat-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #729CA2;\n  border-radius: 10px;\n}\n.chat-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #598288;\n}\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  \n  align-items: flex-start;\n  padding: 6px 10px;\n  border-radius: 12px;\n  min-height: 36px;\n  min-width: 5%;\n  max-width: 70%;\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 19px;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  position: relative;\n  \n  transition: all 0.2s;\n  white-space: pre-wrap;\n  \n  \n}\n.message.bot[_ngcontent-%COMP%] {\n  background-color: #729CA2;\n  color: #ECF3F4;\n  border-top-left-radius: 0;\n  margin-right: auto;\n}\n.message.user[_ngcontent-%COMP%] {\n  background-color: #ECF3F4;\n  color: #729CA2;\n  border-top-right-radius: 0;\n  margin-left: auto;\n}\n.message.loading[_ngcontent-%COMP%]:after {\n  overflow: hidden;\n  display: inline-block;\n  vertical-align: bottom;\n  animation: loading-message steps(4, end) 1500ms infinite;\n  content: \"\u2026\";\n  width: 0;\n  font-size: 20px;\n  color: #ECF3F4;\n}\n.message[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #888;\n  position: absolute;\n  bottom: -18px;\n  \n  right: 0;\n  \n  left: auto;\n  \n  text-align: right;\n  margin-top: 3px;\n  \n}\n.message[_ngcontent-%COMP%]   .timestamp.user[_ngcontent-%COMP%] {\n  left: 0;\n  right: auto;\n  text-align: left;\n}\n.message[_ngcontent-%COMP%]   .timestamp.bot[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n  text-align: right;\n}\n.highlighted-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: transparent;\n  border: 2px solid #fcae22;\n  color: #fcae22;\n  border-radius: 12px;\n  padding: 6px 10px;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n  text-align: center;\n}\n.user-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 10px;\n}\n.user-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #729CA2;\n  color: #ECF3F4;\n  border: none;\n  border-radius: 12px;\n  padding: 6px 12px;\n  font-size: 14px;\n  cursor: pointer;\n  min-width: 40%;\n  max-width: 60%;\n  align-self: flex-start;\n}\n.user-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #598288;\n}\n.chat-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  background-color: #ECF3F4;\n  border-radius: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n}\n.chat-actions[_ngcontent-%COMP%]   .chat-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.chat-actions[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%] {\n  flex: 1;\n  resize: none;\n  border: none;\n  font-size: 14px;\n  padding: 8px;\n  color: #465461;\n  border-radius: 12px;\n  margin-right: 8px;\n  outline: none;\n}\n.chat-actions[_ngcontent-%COMP%]   .chat-input[_ngcontent-%COMP%]::placeholder {\n  color: #cccccc;\n}\n.chat-actions[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fcae22;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n.chat-actions[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   .send-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.chat-actions[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:hover {\n  color: #598288;\n}\n\n@media only screen and (max-width: 1024px) {\n  .chat-card[_ngcontent-%COMP%] {\n    width: 60%;\n    height: 65vh;\n    right: 5%;\n    bottom: 5%;\n    top: 50px;\n  }\n\n  .chat-content[_ngcontent-%COMP%] {\n    max-height: calc(100% - 150px);\n  }\n}\n@media only screen and (max-width: 700px) {\n  .chat-card[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 70vh;\n    right: 10%;\n    bottom: 5%;\n    top: 30px;\n  }\n\n  .chat-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n\n  .chat-content[_ngcontent-%COMP%] {\n    max-height: calc(100% - 130px);\n    padding: 5%;\n  }\n\n  .chat-actions[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n\n  .chat-input[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .send-button[_ngcontent-%COMP%]   .send-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .chat-card[_ngcontent-%COMP%] {\n    width: 95%;\n    height: 65vh;\n    right: 2.5%;\n    bottom: 2.5%;\n    top: 20px;\n  }\n\n  .chat-title[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n\n  .chat-input[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 6px;\n  }\n\n  .send-button[_ngcontent-%COMP%]   .send-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNDNUJNO0VENkJOLDBCQUFBO0VBQ0EsV0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUFGO0FBR0E7RUFDRSxjQ3hDTTtFRHlDTixrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUFGO0FBR0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLG1CQzFFRztFRDJFSCxtQkFBQTtBQUZKO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFBcUIsdUNBQUE7RUFDckIsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtVQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUFvQixpREFBQTtFQUNwQixvQkFBQTtFQUNBLHFCQUFBO0VBQXVCLHVDQUFBO0VBNkJ2QixzQkFBQTtBQTdCRjtBQUlFO0VBQ0UseUJDeEdHO0VEeUdILGNDdkdJO0VEd0dKLHlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UseUJDN0dJO0VEOEdKLGNDaEhHO0VEaUhILDBCQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0RBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQzNISTtBRHVIUjtBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQWUsaUNBQUE7RUFDZixRQUFBO0VBQVUsNkNBQUE7RUFDVixVQUFBO0VBQVksNkNBQUE7RUFDWixpQkFBQTtFQUNBLGVBQUE7RUFBaUIseUNBQUE7QUFGckI7QUFJSTtFQUNFLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUtJO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUhOO0FBUUE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUxGO0FBUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQUxGO0FBT0U7RUFDRSx5QkM3S0c7RUQ4S0gsY0M1S0k7RUQ2S0osWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFMSjtBQU9JO0VBQ0UseUJBQUE7QUFMTjtBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ2hNTTtFRGlNTixtQkFBQTtFQUNBLHdDQUFBO0FBUEY7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFQSjtBQVVFO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQ25OSTtFRG9OSixtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQVJKO0FBVUk7RUFDRSxjQUFBO0FBUk47QUFZRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBVko7QUFZSTtFQUNFLGVBQUE7QUFWTjtBQWFJO0VBQ0UsY0FBQTtBQVhOO0FBZ0JBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VBYkY7O0VBZUE7SUFDRSw4QkFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUFiRjs7RUFlQTtJQUNFLGlCQUFBO0VBWkY7O0VBY0E7SUFDRSw4QkFBQTtJQUNBLFdBQUE7RUFYRjs7RUFhQTtJQUNFLFlBQUE7RUFWRjs7RUFZQTtJQUNFLGVBQUE7RUFURjs7RUFXQTtJQUNFLGVBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VBVEY7O0VBV0E7SUFDRSxrQkFBQTtFQVJGOztFQVVBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUFQRjs7RUFTQTtJQUNFLGVBQUE7RUFORjtBQUNGIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY2hhdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmJqQ2tKcSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzQyNWI3Njtcbn1cblxuLmNoYXQtY2FyZCB7XG4gIHdpZHRoOiAzNzEuMnB4O1xuICBoZWlnaHQ6IDU1MS4ycHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0JTtcbiAgcmlnaHQ6IDQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRvcDogMTIwcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MsIGhlaWdodCAwLjNzO1xufVxuXG4uY2hhdC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNTI0O1xuICBjb2xvcjogI0VDRjNGNDtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY2hhdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0LXN1YnRpdGxlIHtcbiAgY29sb3I6ICNFQ0YzRjQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5zdGF0dXMtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xufVxuXG4uY2hhdC1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IDUlO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5jaGF0LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cbi5jaGF0LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jaGF0LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzcyOUNBMjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jaGF0LWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU5ODI4ODtcbn1cblxuLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAvKiBLZWVwIG1lc3NhZ2VzIGFsaWduZWQgaG9yaXpvbnRhbGx5ICovXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgbWluLXdpZHRoOiA1JTtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgaHlwaGVuczogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBOZWVkZWQgZm9yIGFic29sdXRlIHBvc2l0aW9uaW5nIG9mIHRpbWVzdGFtcCAqL1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAvKiBQcmVzZXJ2ZSBzcGFjZXMgYW5kIHdyYXAgbG9uZyB0ZXh0ICovXG4gIC8qIFRpbWVzdGFtcCBzdHlsaW5nICovXG59XG4ubWVzc2FnZS5ib3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI5Q0EyO1xuICBjb2xvcjogI0VDRjNGNDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm1lc3NhZ2UudXNlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0YzRjQ7XG4gIGNvbG9yOiAjNzI5Q0EyO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ubWVzc2FnZS5sb2FkaW5nOmFmdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBhbmltYXRpb246IGxvYWRpbmctbWVzc2FnZSBzdGVwcyg0LCBlbmQpIDE1MDBtcyBpbmZpbml0ZTtcbiAgY29udGVudDogXCLigKZcIjtcbiAgd2lkdGg6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNFQ0YzRjQ7XG59XG4ubWVzc2FnZSAudGltZXN0YW1wIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICM4ODg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMThweDtcbiAgLyogUG9zaXRpb25lZCBiZWxvdyB0aGUgbWVzc2FnZSAqL1xuICByaWdodDogMDtcbiAgLyogQWxpZ24gdG8gdGhlIHJpZ2h0IHNpZGUgZm9yIGJvdCBtZXNzYWdlcyAqL1xuICBsZWZ0OiBhdXRvO1xuICAvKiBBbGlnbiB0byB0aGUgbGVmdCBzaWRlIGZvciB1c2VyIG1lc3NhZ2VzICovXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIC8qIEFkZCBzcGFjZSBiZXR3ZWVuIHRleHQgYW5kIHRpbWVzdGFtcCAqL1xufVxuLm1lc3NhZ2UgLnRpbWVzdGFtcC51c2VyIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWVzc2FnZSAudGltZXN0YW1wLmJvdCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmhpZ2hsaWdodGVkLW9wdGlvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmY2FlMjI7XG4gIGNvbG9yOiAjZmNhZTIyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnVzZXItb3B0aW9ucyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI5Q0EyO1xuICBjb2xvcjogI0VDRjNGNDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi13aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi51c2VyLW9wdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5ODI4ODtcbn1cblxuLmNoYXQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjNGNDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5jaGF0LWFjdGlvbnMgLmNoYXQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXQtYWN0aW9ucyAuY2hhdC1pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICM0NjU0NjE7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNoYXQtYWN0aW9ucyAuY2hhdC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cbi5jaGF0LWFjdGlvbnMgLnNlbmQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmNhZTIyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2hhdC1hY3Rpb25zIC5zZW5kLWJ1dHRvbiAuc2VuZC1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmNoYXQtYWN0aW9ucyAuc2VuZC1idXR0b246aG92ZXIge1xuICBjb2xvcjogIzU5ODI4ODtcbn1cblxuLyogUmVzcG9uc2l2ZSBzdHlsZXMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jaGF0LWNhcmQge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBib3R0b206IDUlO1xuICAgIHRvcDogNTBweDtcbiAgfVxuXG4gIC5jaGF0LWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY2hhdC1jYXJkIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNzB2aDtcbiAgICByaWdodDogMTAlO1xuICAgIGJvdHRvbTogNSU7XG4gICAgdG9wOiAzMHB4O1xuICB9XG5cbiAgLmNoYXQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgLmNoYXQtY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTMwcHgpO1xuICAgIHBhZGRpbmc6IDUlO1xuICB9XG5cbiAgLmNoYXQtYWN0aW9ucyB7XG4gICAgcGFkZGluZzogNnB4O1xuICB9XG5cbiAgLmNoYXQtaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5zZW5kLWJ1dHRvbiAuc2VuZC1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNoYXQtY2FyZCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDY1dmg7XG4gICAgcmlnaHQ6IDIuNSU7XG4gICAgYm90dG9tOiAyLjUlO1xuICAgIHRvcDogMjBweDtcbiAgfVxuXG4gIC5jaGF0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cblxuICAuY2hhdC1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgfVxuXG4gIC5zZW5kLWJ1dHRvbiAuc2VuZC1pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iLCIkb3JhbmdlOiAjRkY4OTNCO1xuJGJsYWNrOiAjNDY1NDYxO1xuJGJsdWU6ICM3MjlDQTI7XG4kbGlnaHRfYmx1ZTogI0M0RENERjtcbiR3aGl0ZTogI0VDRjNGNDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    email: 'leticiamichelin@outlook.com',
    githubUrl: 'https://github.com/leticiabma'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "OD22":
/*!**********************************************************!*\
  !*** ./src/app/pages/fixed-chat/fixed-chat.component.ts ***!
  \**********************************************************/
/*! exports provided: FixedChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedChatComponent", function() { return FixedChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/display-type.enum */ "Sy+D");

 // Correctly import the DisplayType enum

class FixedChatComponent {
    constructor() {
        this.displayType = src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_1__["DisplayType"]; // Assign DisplayType to the component's property so it can be used in the template
    }
}
FixedChatComponent.ɵfac = function FixedChatComponent_Factory(t) { return new (t || FixedChatComponent)(); };
FixedChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FixedChatComponent, selectors: [["app-fixed-chat"]], decls: 0, vars: 0, template: function FixedChatComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXhlZC1jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fixed-chat',
                templateUrl: './fixed-chat.component.html',
                styleUrls: ['./fixed-chat.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "P0tK":
/*!**********************************************************************!*\
  !*** ./src/app/pages/collapsible-chat/collapsible-chat.component.ts ***!
  \**********************************************************************/
/*! exports provided: CollapsibleChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleChatComponent", function() { return CollapsibleChatComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/display-type.enum */ "Sy+D");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/chat/chat.component */ "3tD2");








function CollapsibleChatComponent_app_chat_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-chat", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("display", ctx_r0.displayType.Collapsible)("@fadeAnimation", undefined);
} }
class CollapsibleChatComponent {
    constructor() {
        this.botIconPath = './assets/bot.png';
        this.chatIconPath = './assets/chat.png';
        this.isOpen = false;
        this.iconSrc = this.botIconPath;
        this.iconState = 'default';
        this.displayType = src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__["DisplayType"];
    }
    onChangeChatState() {
        this.isOpen = !this.isOpen;
        this.iconState = (this.iconState === 'default' ? 'rotated' : 'default');
        if (this.isOpen)
            this.iconSrc = this.chatIconPath;
        else
            this.iconSrc = this.botIconPath;
    }
}
CollapsibleChatComponent.ɵfac = function CollapsibleChatComponent_Factory(t) { return new (t || CollapsibleChatComponent)(); };
CollapsibleChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CollapsibleChatComponent, selectors: [["app-collapsible-chat"]], decls: 3, vars: 5, consts: [["matSuffix", "", "mat-fab", "", 1, "chat-button", 3, "disableRipple", "click"], [3, "src", "ngClass"], [3, "display", 4, "ngIf"], [3, "display"]], template: function CollapsibleChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CollapsibleChatComponent_Template_button_click_0_listener() { return ctx.onChangeChatState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CollapsibleChatComponent_app_chat_2_Template, 1, 2, "app-chat", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableRipple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("@rotateAnimation", ctx.iconState)("ngClass", ctx.isOpen ? "button-icon chat" : "button-icon bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]], styles: [".chat-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 5%;\n  right: 3%;\n  background-color: #465461;\n}\n.chat-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  \n}\n.chat-button[_ngcontent-%COMP%]   .button-icon.chat[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.chat-button[_ngcontent-%COMP%]   .button-icon.bot[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb2xsYXBzaWJsZS1jaGF0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQ1JJO0FET1I7QUFHSTtFQUNHOztHQUFBO0FBQ1A7QUFFUTtFQUNJLFVBQUE7QUFBWjtBQUdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRFoiLCJmaWxlIjoiY29sbGFwc2libGUtY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvY29sb3JzJztcblxuLmNoYXQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNSU7XG4gICAgcmlnaHQ6IDMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcblxuICAgIC5idXR0b24taWNvbiB7XG4gICAgICAgLyogIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICovXG4gICAgICAgICYuY2hhdCB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5ib3Qge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiJG9yYW5nZTogI0ZGODkzQjtcbiRibGFjazogIzQ2NTQ2MTtcbiRibHVlOiAjNzI5Q0EyO1xuJGxpZ2h0X2JsdWU6ICNDNERDREY7XG4kd2hpdGU6ICNFQ0YzRjQ7Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotateAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(-360deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("150ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("150ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, }))
                ])
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapsibleChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-collapsible-chat',
                templateUrl: './collapsible-chat.component.html',
                styleUrls: ['./collapsible-chat.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotateAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(-360deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("150ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":leave", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("150ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, }))
                        ])
                    ]),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy+D":
/*!***************************************************!*\
  !*** ./src/app/shared/enums/display-type.enum.ts ***!
  \***************************************************/
/*! exports provided: DisplayType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayType", function() { return DisplayType; });
var DisplayType;
(function (DisplayType) {
    // Fixed = 'fixed-chat',
    // Collapsible = 'collapsible-chat'
    DisplayType["Fixed"] = "Fixed";
    DisplayType["Floating"] = "Floating";
    DisplayType["Collapsible"] = "Collapsible";
})(DisplayType || (DisplayType = {}));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/enums/display-type.enum */ "Sy+D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(location) {
        this.location = location;
        this.email = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].email;
        this.copyEmail = false;
        this.displayType = _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__["DisplayType"];
        this.display = _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__["DisplayType"].Fixed;
        const path = this.location.path().split('/')[1];
        this.display = path ? path : this.display;
    }
    onClickCopyEmail() {
        this.copyEmail = true;
        setTimeout(() => {
            this.copyEmail = false;
        }, 2000);
    }
    onClickRedirectGithub() {
        window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].githubUrl, '_blank');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "full-width", "full-height"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".app-header[_ngcontent-%COMP%] {\n  height: 15%;\n  background-color: #465461;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.app-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 100%;\n  text-align: center;\n  color: #ECF3F4;\n  font-size: 2vh;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 3%;\n  height: 30%;\n  border-radius: 0;\n  border: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 15%;\n  text-align: center;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.8vh;\n  padding: 0.5em 0.5em;\n  cursor: pointer;\n  transition: all 0.3s;\n  background: #ECF3F4;\n  border-radius: 2px;\n  color: #465461;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: #729CA2;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%] {\n  width: 10%;\n  justify-content: center;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .socials-icons[_ngcontent-%COMP%] {\n  gap: 20%;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  filter: invert(100%);\n  width: 2.5vh;\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .copy-alert[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16%;\n  width: 10%;\n  color: #729CA2;\n  font-size: 2vh;\n  font-weight: 500;\n  animation: copy-alert 2s 1;\n  -webkit-animation: copy-alert 2s 1;\n  animation-fill-mode: forwards;\n  animation-delay: 2s;\n  -webkit-animation-delay: 1s;\n  \n  -webkit-animation-fill-mode: forwards;\n}\n@keyframes copy-alert {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EseUJDSEk7RURJSiw4QkFBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNDUkE7RURTQSxjQUFBO0FBRFI7QUFJSTtFQUNJLFVBQUE7QUFGUjtBQUlRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGWjtBQUlZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRmhCO0FBSWdCO0VBQ0ksYUFBQTtBQUZwQjtBQUtnQjtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkN4Q1o7RUR5Q1ksa0JBQUE7RUFDQSxjQzdDWjtBRDBDUjtBQU1nQjtFQUNJLFlBQUE7QUFKcEI7QUFPZ0I7RUFDSSxtQkNwRGI7QUQrQ1A7QUFXSTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQVRSO0FBV1E7RUFDSSxRQUFBO0FBVFo7QUFZUTtFQUVJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFWWjtBQWFRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNDN0VMO0VEOEVLLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUVBLG1CQUFBO0VBQ0EsMkJBQUE7RUFBNEIsc0JBQUE7RUFDNUIscUNBQUE7QUFYWjtBQWNRO0VBQ0k7SUFBTSxVQUFBO0VBWGhCO0VBWVU7SUFBSSxVQUFBO0VBVGQ7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL2NvbG9ycyc7XG5cbi5hcHAtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcblxuICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAydmg7XG4gICAgfVxuXG4gICAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICAuY2hhdC1idXR0b25zIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogMyU7XG4gICAgICAgICAgICBoZWlnaHQ6MzAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAgICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1JTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBpbnB1dCB7IFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44dmg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGFiZWw6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgKyBsYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFwcC1zb2NpYWxzIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLnNvY2lhbHMtaWNvbnN7XG4gICAgICAgICAgICBnYXA6IDIwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG4gICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgICAgICAgICAgIHdpZHRoOiAyLjV2aDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3B5LWFsZXJ0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTYlO1xuICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjpjb3B5LWFsZXJ0IDJzIDE7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjpjb3B5LWFsZXJ0IDJzIDE7XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6MnM7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheToxczsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBrZXlmcmFtZXMgY29weS1hbGVydHtcbiAgICAgICAgICAgIGZyb20ge29wYWNpdHkgOjE7fVxuICAgICAgICAgICAgdG8ge29wYWNpdHkgOjA7fVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgY29weS1hbGVydHtcbiAgICAgICAgICAgIGZyb20ge29wYWNpdHkgOjE7fVxuICAgICAgICAgICAgdG8ge29wYWNpdHkgOjA7fVxuICAgICAgICB9XG4gICAgfSAgICBcbn0iLCIkb3JhbmdlOiAjRkY4OTNCO1xuJGJsYWNrOiAjNDY1NDYxO1xuJGJsdWU6ICM3MjlDQTI7XG4kbGlnaHRfYmx1ZTogI0M0RENERjtcbiR3aGl0ZTogI0VDRjNGNDsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/material.module */ "1+r1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/fixed-chat/fixed-chat.component */ "OD22");
/* harmony import */ var _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/collapsible-chat/collapsible-chat.component */ "P0tK");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");







 // Make sure FormsModule is imported


 // Import the ChatComponent

class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"] // FormsModule for ngModel and template-driven forms
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_7__["FixedChatComponent"],
        _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_8__["CollapsibleChatComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"] // Declare the ChatComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"] // FormsModule for ngModel and template-driven forms
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_7__["FixedChatComponent"],
                    _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_8__["CollapsibleChatComponent"],
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"] // Declare the ChatComponent
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"] // FormsModule for ngModel and template-driven forms
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/fixed-chat/fixed-chat.component */ "OD22");
/* harmony import */ var _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/collapsible-chat/collapsible-chat.component */ "P0tK");
/* harmony import */ var _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/enums/display-type.enum */ "Sy+D");







const routes = [
    {
        path: '',
        redirectTo: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_4__["DisplayType"].Collapsible,
        pathMatch: 'full',
    },
    {
        path: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_4__["DisplayType"].Fixed,
        component: _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_2__["FixedChatComponent"]
    },
    {
        path: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_4__["DisplayType"].Collapsible,
        component: _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_3__["CollapsibleChatComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map