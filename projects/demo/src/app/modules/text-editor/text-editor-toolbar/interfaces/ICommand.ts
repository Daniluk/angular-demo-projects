export interface ICommand {
    NAME: string;
    TYPE?: string;
}

export const TYPE = {
    ADD: 'add',
    REMOVE: 'remove'
};
