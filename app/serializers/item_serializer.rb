class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  def category
    self.category.try(:name)
  end
end
