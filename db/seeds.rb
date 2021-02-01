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

@astilbe = Plant.create!(name: "Astilbe", user_id: 1, user_id: 1, plant_type: "flower", bloom_time: "Fall", image_url: "https://www.americanmeadows.com/media/wysiwyg/a/s/astilbe_key_west_1of2.jpg")
@daisy = Plant.create!(name: "Daisy", user_id: 1, plant_type: "flower", bloom_time: "Summer", image_url: "https://plants4home.com/wp-content/uploads/2017/03/TL-2lebe-01.jpg")
@begonia = Plant.create!(name: "Begonia", user_id: 1, plant_type: "flower", bloom_time: "Spring through Fall", image_url: "https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwf2ba27db/Images/Product%20Images/prod000134/prod000134.jpg?sw=265&sh=312&sm=fit")
@bleeding_heart = Plant.create!(name: "Bleeding_Heart", user_id: 1, plant_type: "flower", bloom_time: "Spring", image_url: "https://cdn11.bigcommerce.com/s-999jbj41m8/product_images/uploaded_images/van-zyverden-perennials-83527-64-1000.jpg")
@columbine = Plant.create!(name: "Columbine", user_id: 1, plant_type: "flower", bloom_time: "Spring through Summer", image_url: "https://gardenerspath.com/wp-content/uploads/2017/02/How-to-Grow-Beautiful-Columbine-Flowers-Cover2.jpg")
@dianthus = Plant.create!(name: "Dianthus", user_id: 1, plant_type: "flower", bloom_time: "Spring through Fall", image_url: "https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw4859818f/Images/Product%20Images/prod002081/prod002081.jpg?sw=265&sh=312&sm=fit")
@gaura = Plant.create!(name: "Gaura", user_id: 1, plant_type: "flower", bloom_time: "Summer", image_url: "https://horomidis.gr/wp-content/uploads/2013/08/FLSGAU29727_3.jpg")
@lavender = Plant.create!(name: "Lavender", user_id: 1, plant_type: "flower", bloom_time: "Spring through Fall", image_url: "https://i.etsystatic.com/7823519/r/il/797209/1388738084/il_1588xN.1388738084_bcay.jpg")
@rose = Plant.create!(name: "Rose", user_id: 1, plant_type: "flower", bloom_time: "Spring", image_url: "https://homegardenandhomestead.com/wp-content/uploads/2019/08/red-rose-bush.jpeg")
@snapdragon = Plant.create!(name: "Snapdragon", user_id: 1, plant_type: "Summer", bloom_time: "BB", image_url: "https://www.hortmag.com/.image/t_share/MTcyMzM2ODgyNjQ5MjEyODY4/snaptinipeachsnapdragon.jpg")

@african_violet = Plant.create!(name: "African_Violet", user_id: 1, plant_type: "indoor", bloom_time: "Summer", image_url: "https://ae01.alicdn.com/kf/HTB11oWMLpXXXXaCaXXXq6xXFXXXD/50pcs-rare-colours-Violet-seeds-Perennial-Herb-Matthiola-Incana-flower-Seeds-Very-Beautiful-bonsai-plants-for.jpg")
@jade = Plant.create!(name: "Jade", user_id: 1, plant_type: "indoor", bloom_time: "no blooms", image_url: "https://robertsonsflowers.imgix.net/images/itemVariation/jadeplantinnewportpot-200311121403.jpg")
@aloe_vera = Plant.create!(name: "Aloe_Vera", user_id: 1, plant_type: "indoor", bloom_time: "no blooms", image_url: "https://www.almanac.com/sites/default/files/image_nodes/aloe-vera-white-pot_sunwand24-ss_edit.jpg")
@amaryllis = Plant.create!(name: "Amaryllis", user_id: 1, plant_type: "indoor", bloom_time: "Summer", image_url: "https://www.gardeners.com/dw/image/v2/AABF_PRD/on/demandware.static/-/Sites-GSC_Products/default/dw033e44e4/Products/8599330-group-red-pot-h_2019_deluxe-potted-amaryllis-with-stake.jpg?sw=840&sh=1120&sm=fit")
@asparagus_fern = Plant.create!(name: "Asparagus_Fern", user_id: 1, plant_type: "indoor", bloom_time: "no blooms", image_url: "https://gardenerspath.com/wp-content/uploads/2019/02/How-to-Grow-Asparagus-Ferns-in-Pots.jpg")
@bamboo_palm = Plant.create!(name: "Bamboo_Palm", user_id: 1, plant_type: "indoor", bloom_time: "no blooms", image_url: "https://images-na.ssl-images-amazon.com/images/I/61f4SumHFuL._SY741_.jpg")
@chinese_evergreen = Plant.create!(name: "Chinese_Evergreen", user_id: 1, plant_type: "indoor", bloom_time: "no blooms", image_url: "https://www.whiteflowerfarm.com/mas_assets/cache/image/5/9/f/f/23039.Jpg")
@orchid = Plant.create!(name: "Orchid", user_id: 1, plant_type: "indoor", bloom_time: "Summer", image_url: "https://assets.eflorist.com/assets/products/PHR_/T99-1A.jpg")
@croton = Plant.create!(name: "Croton", user_id: 1, plant_type: "indoor", bloom_time: "no blooms", image_url: "https://www.rgfloral.com/wp-content/uploads/20191012_093105-01-e1570899299456.jpeg")
@ficus = Plant.create!(name: "Ficus", user_id: 1, plant_type: "indoor", bloom_time: "no blooms", image_url: "https://images-na.ssl-images-amazon.com/images/I/41aCo3Hw74L._AC_.jpg")

@hydrangea = Plant.create!(name: "Hydrangea", user_id: 1, plant_type: "bush", bloom_time: "Summer through Fall", image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-680839667-1555611719.jpg?crop=0.752xw:1.00xh;0.219xw,0&resize=480:*")
@burning_bush = Plant.create!(name: "Burning_Bush", user_id: 1, plant_type: "bush", bloom_time: "no blooms", image_url: "https://i.etsystatic.com/13098602/r/il/9b9d8a/1054050109/il_1588xN.1054050109_jlc2.jpg")
@barberry = Plant.create!(name: "Barberry", user_id: 1, plant_type: "bush", bloom_time: "no blooms", image_url: "https://www.naturesmulch.com/wp-content/uploads/2020/02/Admiration-Japanese-Barberry.jpg")
@sage = Plant.create!(name: "Sage", user_id: 1, plant_type: "bush", bloom_time: "Summer through Fall", image_url: "https://s3.amazonaws.com/cdn.gurneys.com/images/800/67659.jpg")
@weigela = Plant.create!(name: "Weigela", user_id: 1, plant_type: "bush", bloom_time: "Summer, again in Fall", image_url: "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Weigela_Sonic_Bloom_Pink_1_FGT_450x.jpg?v=1605224263")
@butterfly_bush = Plant.create!(name: "Butterfly_Bush", user_id: 1, plant_type: "bush", bloom_time: "Summer", image_url: "https://i.etsystatic.com/21543414/r/il/cd64ff/2093777476/il_1588xN.2093777476_ghi4.jpg")
@ninebark = Plant.create!(name: "Ninebark", user_id: 1, plant_type: "bush", bloom_time: "no blooms", image_url: "https://www.altums.com/wp-content/uploads/2019/08/altums-amber-jubilee-ninebark-4.jpg")
@forsythia = Plant.create!(name: "Forsythia", user_id: 1, plant_type: "bush", bloom_time: "Spring", image_url: "https://bloximages.chicago2.vip.townnews.com/capjournal.com/content/tncms/assets/v3/editorial/0/e4/0e4a13b6-752c-11ea-987d-87d16d2fe1d7/5e865e61cc9ab.image.png?resize=400%2C392")
@boxwood = Plant.create!(name: "Boxwood", user_id: 1, plant_type: "bush", bloom_time: "no blooms", image_url: "https://cdn.shopify.com/s/files/1/0062/8532/8445/products/English_Boxwood_1_BB_1024x1024.jpg?v=1602788338")
@azalea = Plant.create!(name: "Azalea", user_id: 1, plant_type: "bush", bloom_time: "Spring", image_url: "https://terra4incognita.files.wordpress.com/2008/05/100_9790sm.jpg")

@japanese_maple = Plant.create!(name: "Japanese_Maple", user_id: 1, plant_type: "tree", bloom_time: "no blooms", image_url: "https://i.etsystatic.com/23754746/r/il/8514e2/2710452923/il_1588xN.2710452923_aq7p.jpg")
@cypress = Plant.create!(name: "Cypress", user_id: 1, plant_type: "tree", bloom_time: "no blooms", image_url: "https://images-na.ssl-images-amazon.com/images/I/81CMfWJpogL._AC_SY450_.jpg")
@black_gum = Plant.create!(name: "Black_Gum", user_id: 1, plant_type: "tree", bloom_time: "no blooms", image_url: "https://i.pinimg.com/originals/de/25/b7/de25b7ba38d5138a8c4e1e6fb3251b8f.jpg")
@magnolia = Plant.create!(name: "Magnolia", user_id: 1, plant_type: "tree", bloom_time: "Summer", image_url: "https://i.pinimg.com/originals/28/54/e5/2854e53f2a44bf3334da07effd4cef0f.jpg")
@arborvitae = Plant.create!(name: "Arborvitae", user_id: 1, plant_type: "tree", bloom_time: "no blooms", image_url: "https://i.pinimg.com/236x/a9/0c/f0/a90cf0c22bfd6142905ac513eb625ed3.jpg")
@crabapple = Plant.create!(name: "Crabapple", user_id: 1, plant_type: "tree", bloom_time: "Spring", image_url: "https://www.thetreecenter.com/c/uploads/crab-flowering-profusion-1.jpg")
@crapemyrtle = Plant.create!(name: "Crapemyrtle", user_id: 1, plant_type: "tree", bloom_time: "Summer", image_url: "https://cdn.shopify.com/s/files/1/0062/8532/8445/products/Pnk_Velour_Crape_Myrtle_1_BB_1024x1024.jpg?v=1590779910")
@willow = Plant.create!(name: "Willow", user_id: 1, plant_type: "tree", bloom_time: "no blooms", image_url: "https://nwaplantsinc.com/wp-content/uploads/2020/04/weepingwillow.jpg")
@blue_spruce = Plant.create!(name: "Blue_Spruce", user_id: 1, plant_type: "tree", bloom_time: "no blooms", image_url: "https://www.countylinenursery.net/uploads/7/4/9/3/74938711/s346013446412642482_p675_i3_w1280.jpeg")
@redbud = Plant.create!(name: "Redbud", user_id: 1, plant_type: "tree", bloom_time: "Spring", image_url: "https://www.naturehills.com/media/catalog/product/cache/35c1080e597d6a74b42d0d88ced836c1/e/a/eastern-redbud-group.jpg")

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

@astilbe.zones.push(@zone5)
# @daisy.zones.push(@zone6)
# @begonia.zones.push(@zone7)
# @bleeding_heart.zones.push(@zone5)
# @columbine.zones.push(@zone6)
# @dianthus.zones.push(@zone7)
# @guara.zones.push(@zone5)
# @lavendar.zones.push(@zone6)
# @rose.zones.push(@zone7)
# @snapdragon.zones.push(@zone5)

# @african_violet.zones.push(@zone0)
# @jade.zones.push(@zone0)
# @aloe_vera.zones.push(@zone0)
# @amaryllis.zones.push(@zone0)
# @asparagus_fern.zones.push(@zone0)
# @bamboo_palm.zones.push(@zone0)
# @chinese_evergreen.zones.push(@zone0)
# @orchid.zones.push(@zone0)
# @croton.zones.push(@zone0)
# @jaficusde.zones.push(@zone0)

# @hydrangea.zones.push(@zone6)
# @burning_bush.zones.push(@zone7)
# @barberry.zones.push(@zone5)
# @sage.zones.push(@zone6)
# @weigela.zones.push(@zone7)
# @butterfly_bush.zones.push(@zone5)
# @ninebark.zones.push(@zone6)
# @forsythia.zones.push(@zone7)
# @boxwood.zones.push(@zone5)
# @azalea.zones.push(@zone6)

# @japanese_maple.zones.push(@zone7)
# @cypress.zones.push(@zone5)
# @black_gum.zones.push(@zone6)
# @magnolia.zones.push(@zone7)
# @arborvitae.zones.push(@zone5)
# @crabapple.zones.push(@zone6)
# @crapemyrtle.zones.push(@zone7)
# @willow.zones.push(@zone5)
# @blue_spruce.zones.push(@zone6)
# @redbud.zones.push(@zone7)