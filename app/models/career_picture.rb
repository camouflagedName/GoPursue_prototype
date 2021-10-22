class CareerPicture < ApplicationRecord
    validates :title, presence: true
    validates :name, presence: true

    has_one_attached :featured_image

end
