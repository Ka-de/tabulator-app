export interface AuthenticationDTO {
    email: string;
}

export interface Authentication {
    email: string;
    publickey: string;
    access: string[];
}