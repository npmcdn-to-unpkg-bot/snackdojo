class GetRidOfRecommendedItemsColumn < ActiveRecord::Migration
  def change
    remove_column :personas, :recommended_items
  end
end
