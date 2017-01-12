json.title @channel.title
json.ownerId @channel.owner_id
json.messages @channel.messages do |message|
  json.partial! '/api/messages/message', message: message
end

json.users do
  json.array! @channel.users do |user|
    json.set! user.id
  end
end
