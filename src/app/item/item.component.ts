import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {

    editable = false;
    showErrors = false;

    @Input() item: Item;
    @Input() newItem: string;
    @Output() removeItem = new EventEmitter<Item>();
    @Output() setFirst = new EventEmitter<Item>();


    constructor() {
        this.item = {
            description: '',
            done: false,
        };
        this.newItem = '';
    }

    saveItem(description: string) {
        if (!description) {
            this.showErrors = true;
            return;
        }
        this.editable = false;
        this.item.description = description;
        this.setFirst;
    }
}