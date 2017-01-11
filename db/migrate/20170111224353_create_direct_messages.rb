class CreateDirectMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :direct_messages do |t|
      t.integer :to_id, null: false, index: true
      t.integer :from_id, null: false, index: true
      t.timestamps
    end

    add_index :direct_messages, [:to_id, :from_id], unique: true
  end
end
