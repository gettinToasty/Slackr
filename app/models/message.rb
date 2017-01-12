class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :postable, polymorphic: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
