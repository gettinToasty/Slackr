class DirectMessage < ApplicationRecord
  validates :sender, :receiver, presence: true

  belongs_to :sender,
    foreign_key: :from_id,
    class_name: :User

  belongs_to :receiver,
    foreign_key: :to_id,
    class_name: :User

  has_many :messages, as: :postable

end
