class User < ApplicationRecord
  validates :name, presence: true
  validates :age, presence: true
  has_secure_password

end

