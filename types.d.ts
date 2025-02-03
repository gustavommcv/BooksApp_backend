import { JwtPayload } from 'jsonwebtoken';

declare module 'express' {
    export interface Request {
        user?: {
            id: string;
            email: string;
            role: string;
        };
    }
}
