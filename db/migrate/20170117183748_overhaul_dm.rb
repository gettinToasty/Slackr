class OverhaulDm < ActiveRecord::Migration[5.0]
  def change
    remove_column :direct_messages, :from_id
    remove_column :direct_messages, :to_id
    add_column :direct_messages, :title, :string
  end
end
