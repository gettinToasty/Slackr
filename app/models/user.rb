class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :owned_channels,
    foreign_key: :owner_id,
    class_name: :User

  has_many :channel_joins, dependent: :destroy

  has_many :channels,
    through: :channel_joins,
    source: :channel

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    user && user.is_password?(pw) ? user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(password_digest).is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
  end

  private

  def generate_session_token
    tok = SecureRandom.urlsafe_base64(128)
    while User.select(:session_token).include?(tok)
      tok = SecureRandom.urlsafe_base64(128)
    end
    tok
  end
end
