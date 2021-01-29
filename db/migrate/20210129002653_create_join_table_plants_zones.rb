class CreateJoinTablePlantsZones < ActiveRecord::Migration[6.1]
  def change
    create_join_table :plants, :zones do |t|
      # t.index [:food_id, :flavor_id]
      # t.index [:flavor_id, :food_id]
    end
  end
end
