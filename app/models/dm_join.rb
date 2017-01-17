class DmJoin < ApplicationRecord
  validates :user, :direct_message, presence: true

  belongs_to :user

  belongs_to :direct_message
end
