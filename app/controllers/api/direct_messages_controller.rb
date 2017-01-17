class Api::DirectMessagesController < ApplicationController

  def index
    @direct_messages = current_user.direct_messages
  end

  def show
    @direct_message = DirectMessage
      .includes(:users, messages: [:author])
      .find(params[:id])
  end

  def create
    @direct_message = DirectMessage.new
    users = params[:users].map { |user| User.find_by(username: user) }
    users.each { |user| @direct_message.users << user }
    @direct_message.users << current_user
    @direct_message.title = params[:users].join(", ")
    if @direct_message.save
      render :show
    else
      render json: @direct_message.errors.full_messages, status: 422
    end
  end

  def destroy
    @direct_message = DirectMessage.find(params[:id])
    @direct_message.destroy
    render :show
  end

end
