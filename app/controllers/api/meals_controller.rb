class Api::MealsController < ApplicationController
  def new
  end

  def create
    @meal = Meal.new(meal_params)
    @meal.owner_id = 1

    # @attendees = params[:meal][:attendees]

    if @meal.save
      # @attendees.each do |attendee|
      #   Attendee.create(meal_id: @meal.id, user_id: 2)
      # end
      render :show
    end
  end

  private
  def meal_params
    params.require(:meal).permit(:meal_time, :host_name, :meal_location)
  end
end