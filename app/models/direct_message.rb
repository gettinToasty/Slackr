class DirectMessage < ApplicationRecord

  has_many :dm_joins

  has_many :users,
    through: :dm_joins,
    source: :user

  has_many :messages, as: :postable

end
