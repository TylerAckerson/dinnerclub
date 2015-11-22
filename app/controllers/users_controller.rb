class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.waitlisted = true
    if @user.save
      redirect_to :root
    else
      flash.now[:errors] = @user.errors.full_messages
      render :root
    end
  end

  def index
  end

  def show
  end

  def update
  end

  private
  def user_params
    params.require(:user).permit(:email)
  end
end
