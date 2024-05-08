import { TestService } from '../../services/test/test.service';
import ResponseInterface from 'src/models/interface/response.interface';
import { Insertdetails } from 'src/models/dto/user.dto';
export declare class TestController {
    private testservice;
    constructor(testservice: TestService);
    termsAndCondition(): Promise<ResponseInterface>;
    InsertQrCodes(details: Insertdetails): Promise<{
        statusCode: number;
        message: string;
    }>;
}
