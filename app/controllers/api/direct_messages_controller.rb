class Api::DirectMessagesController < ApplicationController

  def index
    @direct_messages =
      current_user.sent_direct_messages +
        current_user.received_direct_messages
  end

  def show
    @direct_message = DirectMessage
      .includes(:sender, :receiver, messages: [:author])
      .find(params[:id])
  end

  def create
    @direct_message = DirectMessage.new
    receiver = Username.find_by(username: params[:username])
    @direct_message.receiver = receiver
    @direct_message.sender = current_user
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
