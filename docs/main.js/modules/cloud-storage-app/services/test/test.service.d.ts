import { AuthService } from 'src/auth/services/auth.service';
export declare class TestService {
    private passEncrypt;
    constructor(passEncrypt: AuthService);
    empDetails(): Promise<any>;
    insertDetails(details: any): Promise<void>;
}
