class Channel < ApplicationRecord
  validates :owner, :title, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :users

  has_many :messages, as: :postable
end
