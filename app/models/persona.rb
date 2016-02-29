class Persona < ActiveRecord::Base
  has_and_belongs_to_many :recommended_items, class_name: 'Item'
end
