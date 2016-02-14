class PersonaSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  def description
    I18n.t("personas.#{name.try(:downcase)}", default: object.description)
  end
end
