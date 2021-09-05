class Career < ApplicationRecord
    validates :title, presence: true
    validates :education, presence: true
    validates :pay, presence: true
    validates :environment, presence: true
    validates :description, presence: true
    validates :image, presence: true
end
