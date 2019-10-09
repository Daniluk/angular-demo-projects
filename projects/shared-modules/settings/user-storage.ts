import ISettings from './interfaces/ISettings';

export default class UserStorage {
    private static userLanguage?: string;
    private static currentLocale?: string;
    private static theme?: any;

    public static init(object?: ISettings) {
        if (!object) {
            return this;
        }
        UserStorage.userLanguage = object.userLanguage;
        UserStorage.currentLocale = object.currentLocale;
        UserStorage.theme = object.theme;
    }

    public static setTheme(name: string): void {

    }

}

