class Api::AttendeesController < ApplicationController
  def new
  end

  def create
    @attendee = Attendee.new(attendee_params)
    @attendee.status = 'pending'

    if @attendee.save
      render :show
    end
  end

  def update
  end

	private
  def attendee_params
    params.require(:attendee).permit(:name, :phone, :meal_id, :status)
  end
end
