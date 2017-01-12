@channels.each do |channel|
  json.set! channel.id do
    json.title channel.title
    json.ownerId channel.owner_id
    json.users do
      json.array! @channel.users do |user|
        json.set! user.id
      end
    end
  end
end
