class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

end
