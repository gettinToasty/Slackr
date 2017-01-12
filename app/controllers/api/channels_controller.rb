class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels
  end

  def show
    @channel = Channel.find(params[:id])
  end
end
