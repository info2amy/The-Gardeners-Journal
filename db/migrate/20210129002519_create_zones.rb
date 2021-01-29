class CreateZones < ActiveRecord::Migration[6.1]
  def change
    create_table :zones do |t|
      t.integer :zone

      t.timestamps
    end
  end
end
