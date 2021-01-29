# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Zone.destroy_all
Plant.destroy_all
User.destroy_all

@admin = User.create!(username: "admin", email: "admin@email.com", password: "123456")

puts "#{User.count} users created."

@astilbe = Plant.create!(name: "astilbe", user_id: 1, user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@daisy = Plant.create!(name: "daisy", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@begonia = Plant.create!(name: "begonia", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@bleeding_heart = Plant.create!(name: "bleeding_heart", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@columbine = Plant.create!(name: "columbine", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@delphinium = Plant.create!(name: "delphinium", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@gaura = Plant.create!(name: "gaura", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@lavender = Plant.create!(name: "lavender", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@rose = Plant.create!(name: "rose", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")
@snapdragon = Plant.create!(name: "snapdragon", user_id: 1, plant_type: "flower", bloom_time: "BB", image_url: "YYY")

@african_violet = Plant.create!(name: "african_violet", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@jade = Plant.create!(name: "jade", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@aloe_vera = Plant.create!(name: "aloe_vera", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@amaryllis = Plant.create!(name: "amaryllis", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@asparagus_fern = Plant.create!(name: "asparagus_fern", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@bamboo_palm = Plant.create!(name: "bamboo_palm", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@chinese_evergreen = Plant.create!(name: "chinese_evergreen", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@orchid = Plant.create!(name: "orchid", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@croton = Plant.create!(name: "croton", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")
@ficus = Plant.create!(name: "ficus", user_id: 1, plant_type: "indoor", bloom_time: "BB", image_url: "YYY")

@hydrangea = Plant.create!(name: "hydrangea", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@burning_bush = Plant.create!(name: "burning_bush", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@barberry = Plant.create!(name: "barberry", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@sage = Plant.create!(name: "sage", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@weigela = Plant.create!(name: "weigela", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@butterfly_bush = Plant.create!(name: "butterfly_bush", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@ninebark = Plant.create!(name: "ninebark", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@forsythia = Plant.create!(name: "forsythia", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@boxwood = Plant.create!(name: "boxwood", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")
@azalea = Plant.create!(name: "azalea", user_id: 1, plant_type: "bush", bloom_time: "BB", image_url: "YYY")

@maple = Plant.create!(name: "maple", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@cypress = Plant.create!(name: "cypress", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@black_gum = Plant.create!(name: "black_gum", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@magnolia = Plant.create!(name: "magnolia", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@arborvitae = Plant.create!(name: "arborvitae", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@crabapple = Plant.create!(name: "crabapple", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@crapemyrtle = Plant.create!(name: "crapemyrtle", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@willow = Plant.create!(name: "willow", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@spruce = Plant.create!(name: "spruce", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")
@redbud = Plant.create!(name: "redbud", user_id: 1, plant_type: "tree", bloom_time: "BB", image_url: "YYY")

puts "#{Plant.count} plants created."

@zone1 = Zone.create!(zone: 1)
@zone2 = Zone.create!(zone: 2)
@zone3 = Zone.create!(zone: 3)
@zone4 = Zone.create!(zone: 4)
@zone5 = Zone.create!(zone: 5)
@zone6 = Zone.create!(zone: 6)
@zone7 = Zone.create!(zone: 7)
@zone8 = Zone.create!(zone: 8)
@zone9 = Zone.create!(zone: 9)
@zone10 = Zone.create!(zone: 10)

puts "#{Zone.count} zones created."

@astilbe.zones.push(@zone1, @zone2, @zone3, @zone4, @zone5,  @zone6,)
