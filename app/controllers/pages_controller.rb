class PagesController < ApplicationController

  def index

  end

  def goods
    @personas = ActiveModel::ArraySerializer.new(Persona.all.order(created_at: :asc), scope: self.view_context)
    @inventory = ActiveModel::ArraySerializer.new(Item.all, scope: self.view_context)
  end

end
