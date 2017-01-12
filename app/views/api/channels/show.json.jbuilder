json.id @channel.id
json.title @channel.title
json.ownerId @channel.owner_id
json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.partial! '/api/messages/message', message: message
    end
  end
end

json.users do
  json.array! @channel.users.pluck :id
end
