class ItemSerializer < ActiveModel::Serializer
  include ActionView::Helpers::AssetTagHelper

  attributes :id, :name, :description, :category, :picture, :price

  def category
    object.category.try(:name)
  end

  def price
    object.price || 0
  end

  def picture
    asset_url(object.picture)
  end
end
