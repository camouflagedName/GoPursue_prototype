class CreateCareers < ActiveRecord::Migration[6.1]
  def change
    create_table :careers do |t|
      t.string :title, null: false
      t.string :education, null: false
      t.string :pay, null: false
      t.string :environment, null: false
      t.text :description, null: false
      t.string :image, null: false

      t.timestamps
    end
  end
end
