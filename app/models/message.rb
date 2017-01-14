class Message < ApplicationRecord
  validates :body, presence: true

  after_commit { MessageRelayJob.perform_later(self, self.postable) }

  belongs_to :postable, polymorphic: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
