class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.text :name
      t.text :username
      t.decimal :age
      t.text :interests, array: true, default: []
      t.string :password_digest
      t.text :bookmarks, array: true, default: []

      t.timestamps
    end
  end
end
