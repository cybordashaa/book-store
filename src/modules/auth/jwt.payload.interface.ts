import { RoleType } from "../role/roletype";


export class IJwtPayload {

    id: number;
    username: string;
    email: string;
    roles: RoleType[];
    iat?: Date;
}