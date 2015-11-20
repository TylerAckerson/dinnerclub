class RemoveLocationValidation < ActiveRecord::Migration
  def change
    change_column :meals, :location_id, :integer, :null => true
  end
end
