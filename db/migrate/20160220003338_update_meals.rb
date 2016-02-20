class UpdateMeals < ActiveRecord::Migration
  def change
  	remove_column :meals, :location_id
  	remove_column :meals, :max_attendees
  	rename_column :meals, :main_course, :host_name
  	change_column :meals, :meal_time, :string
  	add_column :meals, :location, :string
  end
end