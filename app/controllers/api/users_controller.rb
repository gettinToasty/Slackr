class Api::UsersController < ApplicationController

  def index
    @users = User.where.not(username: current_user.username)
  end

  def create
    @user = User.new(user_params)
    @user.channels << Channel.find_by(title: 'slackr-tutorial')
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

end
