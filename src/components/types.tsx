export interface Profile {
    id: number;
    name: string;
    email: string;
    username: string;

    address: Address;
    phone: string;
}

export interface Address {
    city: string;
    zipcode: string
}