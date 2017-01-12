json.id @channel.id
json.title @channel.title
json.ownerId @channel.owner_id
json.messages @channel.messages do |message|
  json.partial! '/api/messages/message', message: message
end

json.users channel.users, :id
