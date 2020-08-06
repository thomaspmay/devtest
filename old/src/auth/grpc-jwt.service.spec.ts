import { Test, TestingModule } from '@nestjs/testing';
import { GrpcJwtService } from './grpc-jwt.service';

describe('GrpcJwtService', () => {
  let service: GrpcJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrpcJwtService],
    }).compile();

    service = module.get<GrpcJwtService>(GrpcJwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
