export default class User {
    public id: number;
    public username: string;
    public firstName: string;
    public lastName: string;

    public constructor(json: any) {
        this.id = json.user.id;
        this.username = json.user.username;
        this.firstName = json.user.firstName;
        this.lastName = json.user.lastName;
    }
}
