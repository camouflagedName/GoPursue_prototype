class Career < ApplicationRecord
    validates :title, :name, :favorite, :skills, :advice, :education, :pay, :environment, :image, presence: true
    validates :title, uniqueness: true
    validates :image, allow_blank: true, format: {
        with: %r{\.(gif|jpg|jpeg|png)\z}i,
        message: 'Must be a GIF, JPG, or PNG image.'
    }
end
