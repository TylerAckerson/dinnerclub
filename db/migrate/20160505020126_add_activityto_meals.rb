class AddActivitytoMeals < ActiveRecord::Migration
  def change
    add_column :meals, :activity, :string
  end
end
