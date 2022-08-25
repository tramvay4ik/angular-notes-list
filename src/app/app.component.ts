import { Component } from '@angular/core';
import { Item } from "./item";
import { ITEMS } from './mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'My Notes';
    allItems = ITEMS;

    get items() {
        return this.allItems;
    }

    addItem(description: string) {
        if (!description) {
            return;
        }

        this.allItems.unshift({
            description,
            done: false
        });
    }

    removeItem(item: Item) {
        this.allItems.splice(this.allItems.indexOf(item), 1);
    }

    setFirst(item: Item) {
        this.allItems.splice(this.allItems.indexOf(item), 1);
        this.allItems.unshift(item);
    }
}