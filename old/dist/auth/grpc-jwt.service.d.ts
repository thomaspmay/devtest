import { IUser, IAuthService } from 'nestjs-guard-grpc';
import { ConfigService } from '@nestjs/config';
export declare class GrpcJwtService implements IAuthService {
    private configService;
    client: any;
    constructor(configService: ConfigService);
    verify(params: any): Promise<IUser | undefined>;
}
