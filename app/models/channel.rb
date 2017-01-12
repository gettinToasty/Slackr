class Channel < ApplicationRecord
  validates :owner, :title, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :channel_joins, dependent: :destroy

  has_many :users,
    through: :channel_joins,
    source: :user

  has_many :messages, as: :postable
end
