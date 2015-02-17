class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :email
      t.text :message

      t.timestamps null: false
    end
  end
end
