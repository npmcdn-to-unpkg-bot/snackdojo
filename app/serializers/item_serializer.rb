class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :picture, :price

  def category
    object.category.try(:name)
  end

  def price
    object.price || 0
  end

  def picture
    scope.image_url(object.picture)
  end
end
