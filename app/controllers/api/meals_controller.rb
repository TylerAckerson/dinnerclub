class Api::MealsController < ApplicationController
  def new
  end

  def create
    @meal = Meal.new(meal_params)
    @meal.owner_id = 1
    
    if @meal.save
      render :show
    end
  end

  def update
    @meal = Meal.find(params['meal']['id'])

    if @meal.update(meal_params)
      render :show
    end
  end

  private
  def meal_params
    params.require(:meal).permit(:meal_time, :host_name, :meal_location)
  end
end