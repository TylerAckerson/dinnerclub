class CreateAttendeeResponses < ActiveRecord::Migration
  def change
    create_table :attendee_responses do |t|
    	t.string :from
      t.string :response_text

      t.timestamps null: false
    end
  end
end
