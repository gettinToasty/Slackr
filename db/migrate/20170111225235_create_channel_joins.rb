class CreateChannelJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :channel_joins do |t|
      t.integer :channel_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.timestamps
    end
  end
end
