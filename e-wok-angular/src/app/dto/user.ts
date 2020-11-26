export class User{
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
}

export class Session{
    token: string;
    user: User;
}