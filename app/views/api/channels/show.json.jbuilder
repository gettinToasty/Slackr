json.id @channel.id
json.title @channel.title
json.ownerId @channel.owner_id
json.set! :messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.id message.id
      json.body message.body
      json.authorId message.author_id
      json.timestap time_ago_in_words(message.created_at)
    end
  end
end

json.users do
  json.array! @channel.users.pluck :id
end
