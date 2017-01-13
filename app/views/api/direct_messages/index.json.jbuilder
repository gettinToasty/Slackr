@direct_messages.each do |dm|
  json.set! dm.id do
    json.id dm.id
    json.to dm.receiver.username
    json.from dm.sender.username
  end
end
