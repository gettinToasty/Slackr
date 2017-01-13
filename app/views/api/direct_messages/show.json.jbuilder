json.id @direct_message.id
json.to @direct_message.receiver.username
json.from @direct_message.sender.username
json.type @direct_message.class.to_s
json.messages do
  @direct_message.messages.each do |message|
    json.set! message.id do
      json.partial! '/api/messages/message', message: message
    end
  end
end
