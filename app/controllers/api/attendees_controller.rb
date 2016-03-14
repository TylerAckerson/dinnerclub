class Api::AttendeesController < ApplicationController
  def new
  end

  def create
    @attendee = Attendee.new(attendee_params)
    @attendee.status = 'invited'

    if @attendee.save
      # twilio stuff to send the invite
      render :show
    end
  end
  
	private
  def attendee_params
    params.require(:attendee).permit(:name, :phone, :meal_id, :status)
  end
end
