import IUser from './interfaces/IUser';

export class User implements IUser {
    password: string;
    status?: number;
    role?: string;
    image?: string;
    username?: string;
    key?: string;
    name: string;
    email: string;

    constructor(object?: IUser) {
        this.name = object.name;
        this.email = object.email;
        this.key = object.key;

    }
}
