class AddItemsPersonas < ActiveRecord::Migration
  def change
    create_table :items_personas, id: false do |t|
      t.uuid :item_id, index: true
      t.uuid :persona_id, index: true
    end
  end
end
