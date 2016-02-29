class PersonaSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :recommended_items

  def description
    I18n.t("personas.#{name.try(:downcase)}", default: object.description)
  end

  def recommended_items
    ActiveModel::ArraySerializer.new(object.recommended_items, scope: scope)
  end
end
