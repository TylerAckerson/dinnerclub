class Api::MealsController < ApplicationController
  def new
  end

  def create
    meal = Meal.new(meal_params)
    meal.meal_time = "2016-01-01 08:00:00"
    meal.owner_id = 1
    if meal.save
      render json: 'good'
    end
    debugger;
  end

  private
  def meal_params
    params.require(:meal).permit(:max_attendees, :main_course, :meal_time)
  end
end
