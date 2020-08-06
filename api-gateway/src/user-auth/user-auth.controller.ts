import { Controller, OnModuleInit } from '@nestjs/common';

@Controller('user-auth')
export class UserAuthController implements OnModuleInit {
    private userAuthService: userAuthService;

    onModuleInit() {
        this.userAuthService = this.userAuthService.getService<this.userAuthService>('UserAuthService')
    }
}
