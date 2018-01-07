import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    providers: [],
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() menuTriggered: EventEmitter<boolean>;

    menuStatus: boolean;
    username: string;

    constructor() {
        this.menuTriggered = new EventEmitter<boolean>();
        this.menuStatus = false;

    }

    menuTriggeredEvent(newMenuStatus: boolean) {
        this.menuStatus = newMenuStatus;
        this.menuTriggered.emit(newMenuStatus);
        this.menuStatus = false;
    }

    ngOnChanges(changes: any) {

    }
}
