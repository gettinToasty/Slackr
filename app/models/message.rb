class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :postable, polymorphic: true

end
