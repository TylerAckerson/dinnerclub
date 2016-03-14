class AddMealsHostNumber < ActiveRecord::Migration
  def change
  	 add_column :meals, :host_number, :string
  end
end
