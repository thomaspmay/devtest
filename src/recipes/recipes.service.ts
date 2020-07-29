import { Injectable } from '@nestjs/common';
import { Recipe, UnprocessedRecipe} from './recipeModels/recipeModels'

@Injectable()
export class RecipesService {
    getAllRecipes(){
        // returns all recipes

    }

    searchRecipes(query: string){
        // returns recipes matching string

    }

    createRecipe(recipe: UnprocessedRecipe){
        
    }
    
    updateRecipe(recipe: Recipe){
        
    }

    deleteRecipe(recipe: Recipe){
        
    }

}
constructor(
    @InjectRepository(RecipeEntity)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  public async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }


  public async findById(id: number): Promise<Todo | null> {
    return await this.todoRepository.findOneOrFail(id);
  }

  public async create(todo: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  public async update(
    id: number,
    newValue: CreateTodoDto,
  ): Promise<Todo | null> {
    const todo = await this.todoRepository.findOneOrFail(id);
    if (!todo.id) {
      // tslint:disable-next-line:no-console
      console.error("Todo doesn't exist");
    }
    await this.todoRepository.update(id, newValue);
    return await this.todoRepository.findOne(id);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }
