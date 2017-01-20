json.id 0
json.title 'search results'
json.ownerId current_user.id
json.type 'Channel'
json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.partial! '/api/messages/message', message: message
    end
  end
end

json.users []
