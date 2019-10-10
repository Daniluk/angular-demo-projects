import IFooterItem from '../interfaces/IFooterItem';

export class FooterItem implements IFooterItem {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        return this;
    }
}