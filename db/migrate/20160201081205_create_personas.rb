class CreatePersonas < ActiveRecord::Migration
  def change
    enable_extension 'uuid-ossp'

    create_table :personas, id: :uuid do |t|
      t.string :name
      t.text :description
      t.text :recommended_items
      t.text :image

      t.timestamps null: false
    end
  end
end
