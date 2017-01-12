class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def show
    @channel = Channel.includes(messages: [:author]).find(params[:id])
  end
end
