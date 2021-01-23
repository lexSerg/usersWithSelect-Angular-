export interface IUser {
    id : number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address : {
        street: string,
        suite: string,
        city: string,
    },
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}