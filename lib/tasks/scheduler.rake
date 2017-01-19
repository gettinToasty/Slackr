desc "This task is called by the Heroku scheduler add-on"

task reset_guest_data: :environment do
  puts "Resetting Guest data"

  guest = User.find_by(username: 'Guest')

  tut = Channel.find_by(title: 'slackr-tutorial').id
  cat = Channel.find_by(title: 'cat-pictures').id
  yee = Channel.find_by(title: 'yeezus-lives').id
  sid = Channel.find_by(title: 'side-projects').id

  ids = [tut, cat, yee, sid]

  Message.where(author_id: guest.id).each(&:delete)
  ChannelJoin.where(user_id: guest.id)
    .reject { |cj| ids.include?(cj.id) }
    .each(&:delete)
  DmJoin.where(user_id: guest.id).each(&:delete)
end

task reset_tutorial_channel: :environment do
  puts "Resetting Tutorial Channel"

  toasty_bot = User.find_by(username: 'toastyBot')
  tut_channel = Channel.find_by(title: 'slackr-tutorial')

  Message.where(postable_type: 'Channel', postable_id: tut_channel.id)
    .where.not(author_id: toasty_bot.id)
    .each(&:delete)
end
