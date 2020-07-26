import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('recipes')
export class RecipesController {
    

    @GrpcMethod('AppContoller','')
}
