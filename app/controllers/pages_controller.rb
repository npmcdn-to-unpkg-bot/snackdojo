class PagesController < ApplicationController

  def index

  end

  def goods
    # TODO: replace with instances of Persona model
    @personas = [
      {
        name: "Prepregnant",
        description: "lorem ipsum1",
      },
      {
        name: "1st Trimester",
        description: "lorem ipsum2",
      },
      {
        name: "2nd Trimester",
        description: "lorem ipsum3",
      },
      {
        name: "3rd Trimester",
        description: "lorem ipsum4",
      },
      {
        name: "Postpartum",
        description: "lorem ipsum5",
      },
    ]
  end

end
