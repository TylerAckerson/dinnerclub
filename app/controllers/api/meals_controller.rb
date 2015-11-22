class Api::MealsController < ApplicationController
  def new
  end

  def create
    meal = Meal.new(meal_params)
    meal.owner_id = 1
    if meal.save
      render json: 'good'
    end
  end

  private
  def meal_params
    params.require(:meal).permit(:max_attendees, :main_course, :meal_time)
  end
end
