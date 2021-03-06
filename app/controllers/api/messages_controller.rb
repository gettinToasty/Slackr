class Api::MessagesController < ApplicationController
  def show
    @message = Message.find(params[:id])
  end

  def index
    @messages = Message
      .where(postable_type: params[:postable_type])
      .find_by(postable_id: params[:postable_id])
  end

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = Message.find(params[:id])
    if @message.update(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def delete
    @message = Message.find(params[:id])
    @message.destroy
    render :show
  end

  def search
    channels = current_user.channels.map(&:id)
    dms = current_user.direct_messages.map(&:id)
    @messages = Message.where('body ILIKE (?)', "%#{params[:query]}%")
      .reject do |message|
        message.postable_type == 'Channel' && !channels.include?(message.postable_id)
      end
      .reject do |message|
        message.postable_type == 'DirectMessage' && !dms.include?(message.postable_id)
      end
    render :search
  end

  private

  def message_params
    params.require(:message).permit(:body, :postable_id, :postable_type, :author_id)
  end
end
