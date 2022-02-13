class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.text :name
      t.text :username
      t.decimal :age
      t.text :interests, array: true, default: []
      t.string :password_digest
      t.text :bookmarks, array: true, default: []
      t.integer :num_logins
      t.string :avg_time
      t.string :last_login
      t.string :viewed_cards, array: true, default: []
      t.string :created_on

      t.timestamps
    end
  end
end
