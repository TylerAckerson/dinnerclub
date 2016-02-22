class UpdateAttendees < ActiveRecord::Migration
  def change
  	add_column :attendees, :name, :string
  	add_column :attendees, :phone, :string
  	add_column :attendees, :status, :string
  end
end