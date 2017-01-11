class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
      t.references :postable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
