# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create([
  {name: "Fruits & Nuts"},
  {name: "Dairy"},
  {name: "Veggies"},
  {name: "Juices"},
])

Persona.create([
  {name: "Prepregnant", description: "prepregant description"},
  {name: "1st Trimester", description: "1st trimester description"},
  {name: "2nd Trimester", description: "2nd trimester description"},
  {name: "3rd Trimester", description: "3rd trimester description"},
  {name: "Postpartum", description: "Postpartum description"},
])

Category.find_each do |c|
  9.times.each do |i|
    c.items.create(
      name: "#{c.name} #{i}",
      description: "#{c.name} #{i} description",
      price: rand(3..5) * 100 + rand(50..99)
    )
  end
end

juices = [
  "http://drinkdailygreens.com/wp-content/themes/dailygreens/images/daily-greens-rejuvenate-bottle.png",
  "http://drinkdailygreens.com/wp-content/themes/dailygreens/images/daily-greens-renew-bottle.png",
  "http://drinkdailygreens.com/wp-content/themes/dailygreens/images/daily-greens-symmetry-bottle.png",
  "http://drinkdailygreens.com/wp-content/themes/dailygreens/images/daily-greens-vitality-bottle.png",
]

Category.where(name: "Juices").first.items.each_with_index do |i, ix|
  i.update picture: juices[ix%juices.length]
end

dairy = [
  "fage_blueberry.png",
  "fage_honey.png",
  "fage_raspberry.png",
  "fage_strawberry.png",
]

Category.where(name: "Dairy").first.items.each_with_index do |i, ix|
  i.update picture: "inventory/#{dairy[ix%dairy.length]}"
end

fruits_nuts = [
  "kind_bluealm_breakfast.png",
  "kind_blueberryvanillacashew.png",
  "kind_cranberryalmond.png",
  "kind_dcc.png",
  "kind_drchocmochaalmond.png",
  "kind_oatsandhoney.png",
  "kind_pomegranatebluepistachio.png",
  "kind_raspchia_breakfast.png",
]

Category.where(name: "Fruits & Nuts").first.items.each_with_index do |i, ix|
  i.update picture: "inventory/#{fruits_nuts[ix%fruits_nuts.length]}"
end
