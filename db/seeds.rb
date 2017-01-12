# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: 'Guest', password: 'password')

channels = Channel.create([
  {
    title: 'yeezus-lives',
    owner_id: 1
  },
  {
    title: 'dankmemes',
    owner_id: 1
  },
  {
    title: 'real-actual-work',
    owner_id: 1
  }
])

channel_joins = ChannelJoin.create([
  {
    user_id: 1,
    channel_id: 1
  },
  {
    user_id: 1,
    channel_id: 2
  }
])

messages = Message.create([
  {
    body: 'i feel like pablo :kanye:',
    author_id: 1,
    postable_type: 'Channel',
    postable_id: 1
  },
  {
    body: 'yo realytalk when does his album drop',
    author_id: 1,
    postable_type: 'Channel',
    postable_id: 1
  }
])
