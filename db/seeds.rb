# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(username: 'Guest', password: 'password')
User.create!(username: 'toastyBot', password: SecureRandom.urlsafe_base64(16))

channels = Channel.create!([
  {
    title: 'yeezus-lives',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'dankmemes',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'wholesome-memes',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'cat-pictures',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'real-actual-work',
    owner: User.find_by(username: 'toastyBot')
  }
])

channel_joins = ChannelJoin.create!([
  {
    user: User.find_by(username: 'Guest'),
    channel: Channel.find_by(title: 'yeezus-lives')
  },
  {
    user: User.find_by(username: 'Guest'),
    channel: Channel.find_by(title: 'dankmemes')
  }
])

direct_messages = DirectMessage.create!([
  {
    sender: User.find_by(username: 'Guest'),
    receiver: User.find_by(username: 'toastyBot')
  }
])

messages = Message.create!([
  {
    body: 'i feel like pablo :kanye:',
    author: User.find_by(username: 'Guest'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: 'yo realytalk when does his album drop',
    author: User.find_by(username: 'Guest'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: "'realytalk'",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: 'shutup ;_;',
    author: User.find_by(username: 'Guest'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  }
])
