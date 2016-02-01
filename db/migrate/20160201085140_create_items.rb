class CreateItems < ActiveRecord::Migration
  def change
    create_table :items, id: :uuid do |t|
      t.string :name
      t.text :description
      t.string :picture
      t.integer :price
      t.uuid :category_id

      t.timestamps null: false
    end
  end
end
