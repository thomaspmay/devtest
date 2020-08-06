import { Test, TestingModule } from '@nestjs/testing';
import { IngredientParserService } from '../ingredient-parser.service';

describe('IngredientParserService', () => {
  let service: IngredientParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientParserService],
    }).compile();

    service = module.get<IngredientParserService>(IngredientParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
