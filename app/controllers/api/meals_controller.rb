class Api::MealsController < ApplicationController
  def initialize
    account_sid = Rails.application.secrets.account_sid
    auth_token = Rails.application.secrets.auth_token
    
    @client = Twilio::REST::Client.new account_sid, auth_token 
    @account_num = Rails.application.secrets.account_num
  end

  def new
  end

  def create
    @meal = Meal.new(meal_params)
    @meal.owner_id = 1
    
    if @meal.save
      @client.messages.create(
        :from => @account_num, 
        :to => @meal.host_number, 
        :body => "Your meal was created: #{@meal.meal_time} at #{@meal.meal_location}."
      )

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
    params.require(:meal).permit(:meal_time, :host_name, :host_number, :meal_location)
  end
end