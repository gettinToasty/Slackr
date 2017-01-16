class MessageRelayJob < ApplicationJob
  def perform(message, channel)
    name = channel.title ? channel.title : 'direct_message'
    new_message = Api::MessagesController.render(
      partial: '/api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast(
      "channel_#{name}",
      message: JSON.parse(new_message)
    )
  end
end
