@channels.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.title channel.title
    json.ownerId channel.owner_id
    json.users channel.users, :id
  end
end
