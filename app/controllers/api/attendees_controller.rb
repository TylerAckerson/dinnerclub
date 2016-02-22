class Api:AttendeesController < ApplicationController
  def new
  end

  def create
  	fail
    @attendee = Attendee.new(attendee_params)
    @attendee.meal_id = params['mealId']

    # @attendees = params[:meal][:attendees]

    if @attendee.save
      # @attendees.each do |attendee|
      #   Attendee.create(meal_id: @meal.id, user_id: 2)
      # end
      render :show
    end
  end

  def update
  end

	private
  def attendee_params
    params.require(:attendee).permit(:name, :phone, :status)
  end
end
