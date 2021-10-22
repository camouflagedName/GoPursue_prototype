class CreateCareerPictures < ActiveRecord::Migration[6.1]
  def change
    create_table :career_pictures do |t|
      t.string :title
      t.text :name

      t.timestamps
    end
  end
end
