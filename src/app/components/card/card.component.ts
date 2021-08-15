import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Song from '../../models/SongModel';

@Component({
    selector: 'bijan-card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    public title: string = 'card';

    @Input() public song!: Song;
    @Output() public buttonEventEmitter: EventEmitter<string> = new EventEmitter<string>();

    public buttonClickHandler() {
        console.log('clicked');
        this.buttonEventEmitter.emit(this.song.name);
    }
}
