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
    users = params[:users].map { |user| User.find_by(username: user) }
      .push(current_user)
    title = users.sort.map(&:username).join(', ')
    @direct_message = DirectMessage.find_or_initialize_by(title: title)
    @direct_message.users = users
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
