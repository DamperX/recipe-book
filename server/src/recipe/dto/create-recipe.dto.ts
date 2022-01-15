class RecipeSettingDto {
  name: string;
  value: number;
  valueName: string;
}

class RecipeStepDto {
  name: string;
  text: string;
  position: number;
}

export class CreateRecipeDto {
  readonly name;
  readonly picture;
  readonly short_text;
  readonly category: string;
  readonly settings: RecipeSettingDto[];
  readonly steps: RecipeStepDto[];
}
