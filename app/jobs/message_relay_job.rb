class MessageRelayJob < ApplicationJob
  def perform(message, channel)
    name = channel.title ? channel.title : 'direct_message'
    message = Api::MessagesController.render(
      partial: '/api/messages/message',
      message: message
    )
    ActionCable.server.broadcast(
      "channel_#{name}",
      message: JSON.parse(message)
    )
  end
end
