class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :picture

  def category
    object.category.try(:name)
  end
end
