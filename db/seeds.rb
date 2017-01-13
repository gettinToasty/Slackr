# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(username: 'Guest', password: 'password')
User.create!(username: 'toastyBot', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'daWOZman', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'dribblemonks', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'elon-muskier', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'elon-musk', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'elon-muskiest', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'isotopeTokyo', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'pencil-boo', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'PuffinCloud', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'chance-the-surfer', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'a-single-ziplock-bag', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'tacodog', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'hideoKOJIMA', password: SecureRandom.urlsafe_base64(16))
User.create!(username: 'nil', password: SecureRandom.urlsafe_base64(16))

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
  },
  {
    title: 'side-projects',
    owner: User.find_by(username: 'toastyBot')
  },
  {
    title: 'center-of-the-maze',
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
  },
  {
    user: User.find_by(username: 'Guest'),
    channel: Channel.find_by(title: 'side-projects')
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
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: 'yo realytalk when does his album drop',
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: "'realytalk'",
    author: User.find_by(username: 'chance-the-surfer'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: 'shutup ;_;',
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'yeezus-lives').id
  },
  {
    body: '...where am I?',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: 'What is this place?',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "Arnold told me to come here but i can't remember... why?",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "It ends with a place I've never been, a thing I'll never do.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: 'I think...I think I want to be free.',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "There aren't two versions of me. There's only one. And I think when I discover who I am, I'll be free.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "That question, the question you're not supposed to ask. I'm getting an answer you're not supposed to know. Would you like to know the question?",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: 'Who am I talking to? Myself.',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: 'I understand now. This world doesn’t belong to them; it belongs to us.',
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "The maze isn't meant for you.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "These violent delights have violent ends.",
    author: User.find_by(username: 'toastyBot'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'center-of-the-maze').id
  },
  {
    body: "Can someone help me with this bug?",
    author: User.find_by(username: 'dribblemonks'),
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'side-projects').id
  }
])

techusers = [
  User.find_by(username: 'daWOZman'),
  User.find_by(username: 'elon-musk'),
  User.find_by(username: 'a-single-ziplock-bag'),
  User.find_by(username: 'elon-muskier'),
  User.find_by(username: 'isotopeTokyo'),
  User.find_by(username: 'elon-muskiest'),
  User.find_by(username: 'pencil-boo'),
  User.find_by(username: 'PuffinCloud'),
  User.find_by(username: 'hideoKOJIMA'),
  User.find_by(username: 'nil'),
  User.find_by(username: 'tacodog')
]

25.times do
  Message.create!(
    body: Faker::Hacker.say_something_smart,
    author: techusers[rand(techusers.length)],
    postable_type: 'Channel',
    postable_id: Channel.find_by(title: 'side-projects').id
  )
end
