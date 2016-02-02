class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category

  def category
    object.category.try(:name)
  end
end
