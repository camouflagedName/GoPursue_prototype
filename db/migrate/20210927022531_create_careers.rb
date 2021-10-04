class CreateCareers < ActiveRecord::Migration[6.1]
  def change
    create_table :careers do |t|
      t.text :title
      t.text :name
      t.text :favorite
      t.text :skills
      t.text :advice
      t.text :education
      t.text :pay
      t.text :environment
      t.text :hashtag, array: true, default: []
      t.text :image
      t.boolean :bookmark

      t.timestamps
    end
  end
end
