import ISettings from './interfaces/ISettings';

export class Settings implements ISettings {
    userLanguage?: string;
    currentLocale?: string;
    theme?: any;

    constructor(object?: ISettings) {
        if (!object) {
            return this;
        }
        this.userLanguage = object.userLanguage;
        this.currentLocale = object.currentLocale;
        this.theme = object.theme;
    }
}
