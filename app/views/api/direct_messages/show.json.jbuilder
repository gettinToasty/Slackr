json.id @direct_message.id
json.title @direct_message.title
json.type @direct_message.class.to_s
json.messages do
  @direct_message.messages.each do |message|
    json.set! message.id do
      json.partial! '/api/messages/message', message: message
    end
  end
end

json.users do
  json.array! @direct_message.users.pluck :id
end
