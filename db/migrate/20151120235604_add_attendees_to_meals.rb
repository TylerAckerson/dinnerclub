class AddAttendeesToMeals < ActiveRecord::Migration
  def change
    add_column :meals, :max_attendees, :integer
  end
end
