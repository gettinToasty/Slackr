class ChannelJoin < ApplicationRecord
  validates :user, :channel, presence: true

  belongs_to :user

  belongs_to :channel

  def self.find_by_user_and_channel(user_id, channel_id)
    ChannelJoin.where(user_id: user_id).find_by(channel_id: channel_id)
  end
end
