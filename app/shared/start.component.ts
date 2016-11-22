import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'my-start',
    templateUrl: 'app/shared/start.component.html',
    styleUrls: ['app/shared/start.component.css']
})

export class StartComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 100 / 5;
    }

    onClick() {
            this.ratingClicked.emit(`rating ${this.rating} `);
    }
}