@direct_messages.each do |dm|
  json.set! dm.id do
    json.to dm.receiver.username
    json.from dm.sender.username
  end
end
