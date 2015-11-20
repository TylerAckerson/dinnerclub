class CreateMeals < ActiveRecord::Migration
  def change
    create_table :meals do |t|
      t.integer :owner_id, null:false
      t.integer :location_id, null:false
      t.datetime :meal_time, null:false
      t.string :main_course, null:false

      t.timestamps null: false
    end
  end
end
