class UpdateMealLocation < ActiveRecord::Migration
  def change
  	rename_column :meals, :location, :meal_location
  end
end
