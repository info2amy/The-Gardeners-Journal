class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.string :image_url
      t.string :type
      t.boolean :deciduous
      t.string :bloom_time
      t.string :watering
      t.string :pruning
      t.string :fertilizing

      t.timestamps
    end
  end
end
