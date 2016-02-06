class PagesController < ApplicationController

  def index

  end

  def goods
    @personas = ActiveModel::ArraySerializer.new(Persona.all)
    @inventory = ActiveModel::ArraySerializer.new(Item.all)
  end

end
