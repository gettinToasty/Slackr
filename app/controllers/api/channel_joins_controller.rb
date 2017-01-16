class Api::ChannelJoinsController < ApplicationController

  def index
    @join = ChannelJoin.find_by_user_and_channel(
      params[:user_id],
      params[:channel_id]
    )
    render :show
  end

  def create
    @join = ChannelJoin.new(channel_join_params)
    @join.user = current_user
    @channel = Channel.find(channel_join_params[:channel_id])
    if @join.save
      render template: 'api/channels/show'
    else
      render json: @join.errors.full_messages, status: 422
    end
  end

  def destroy
    @join = ChannelJoin.find(params[:id])
    @join.destroy
    render json: @join
  end

  private

  def channel_join_params
    params.require(:channel_join).permit(:channel_id)
  end
end
