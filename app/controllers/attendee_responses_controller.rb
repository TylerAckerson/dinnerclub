class AttendeeResponsesController < ApplicationController
	def new
	end

	def create
		params["attendee_response"] = {
			:from => params["From"],
			:response_text => params["Body"]
		}

    @response = AttendeeResponse.new(attendee_response_params)

    if @response.save
    	Attendee.update_status(@response.from[2..-1], @response.response_text)
      render json: nil, status: :ok
    end
	end

	private
  def attendee_response_params
    params.require(:attendee_response).permit(:from, :response_text)
  end
end
