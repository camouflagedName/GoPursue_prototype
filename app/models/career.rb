class Career < ApplicationRecord
    validates :title, presence: true
    validates :name, presence: true
    validates :favorite, presence: true
    validates :skills, presence: true
    validates :advice, presence: true
    validates :education, presence: true
    validates :pay, presence: true
    validates :environment, presence: true
    validates :hashtag, presence: true
    validates :image, presence: true

end
