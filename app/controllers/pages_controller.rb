class PagesController < ApplicationController

  def index

  end

  def goods
    # TODO: replace with instances of Persona model
    @personas = [
      {
        name: "Prepregnant",
      },
      {
        name: "1st Trimester",
      },
      {
        name: "2nd Trimester",
      },
      {
        name: "3rd Trimester",
      },
      {
        name: "Postpartum",
      },
    ]
  end

end
