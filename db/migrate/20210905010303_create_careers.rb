class CreateCareers < ActiveRecord::Migration[6.1]
  def change
    create_table :careers do |t|
      t.text :title, null: false
      t.text :education, null: false
      t.text :pay, null: false
      t.text :environment, null: false
      t.text :description, null: false
      t.text :image, null: false

      t.timestamps
    end
  end
end
