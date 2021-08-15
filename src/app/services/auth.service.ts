import {Injectable} from '@angular/core';
import User from '../models/UserModel';
import Song from '../models/SongModel';

const TOKEN_KEY = '__token__';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public readonly BASE_URL = 'https://songs.code-star.ir/';

    private static get token(): string {
        return localStorage.getItem(TOKEN_KEY) || '';
    }

    private static async sendRequest(url: string, body?: object): Promise<any> {
        const init: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (body) {
            init.method = 'POST';
            init.body = JSON.stringify(body);
        }

        return fetch(url, init).then((res) => {
            if (res.ok) return res.json();
            throw res.json();
        });
    }

    public async getOneUser(id: number): Promise<User> {
        const result = await AuthService.sendRequest(this.BASE_URL + `user/one/${id}`);
        return new User(result);
    }

    public async login(email: string, password: string): Promise<string> {
        const {token} = await AuthService.sendRequest(this.BASE_URL + 'user/login', {email, password});
        localStorage.setItem(TOKEN_KEY, token.toString());
        return token;
    }

    public async songsPage(size: number, current: number): Promise<Song[]> {
        const songs = await AuthService.sendRequest(this.BASE_URL + 'song/page', {size, current});
        return songs.map((x: any) => new Song(x));
    }
}
