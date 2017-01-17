class CreateDmJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :dm_joins do |t|
      t.integer :user_id, null: false
      t.integer :direct_message_id, null: false, index: true
      t.timestamps
    end

    add_index :dm_joins, [:user_id, :direct_message_id], unique: true
  end
end
