import {Component, OnInit} from '@angular/core';
import {EngineService} from '../../services/engine.service';
import Song from '../../models/SongModel';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
    public songs: Song[] = [];

    public constructor(private engineService: EngineService) {}

    public async ngOnInit() {
        this.songs = await this.engineService.songsPage();
    }

    public logName(name: string) {
        console.log(name);
        this.songs = this.songs.filter((x) => x.name !== name);
    }
}
