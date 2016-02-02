class PagesController < ApplicationController

  def index

  end

  def goods
    @personas = ActiveModel::ArraySerializer.new(Persona.all)
    @items = ActiveModel::ArraySerializer.new(Item.all)
  end

end
