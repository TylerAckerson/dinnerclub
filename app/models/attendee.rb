# == Schema Information
#
# Table name: attendees
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  meal_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  phone      :string
#  status     :string
#

class Attendee < ActiveRecord::Base
  belongs_to :user
  belongs_to :meal

 #  def self.update_status(response_number, response_text)
 #  	@attendee = self.find_by({:phone => response_number})	
 #  	response_text.downcase!

 #  	if response_text.include? "yes"
 #  		@attendee.status = "yes"
 #  		self.send_response_yes
 #  		Meal.update_attendee_yes(@attendee.meal_id, @attendee.id)
 #  	elsif response_text.include? "no"
 #  		@attendee.status = "no"
 #  		self.send_response_no
 #  		Meal.update_attendee_no(@attendee.meal_id, @attendee.id)
 #  	end

 #  	puts @attendee
	# end

	# def self.send_response_yes
	#   @client.messages.create(
	# 	  :from => @account_num, 
	# 	  :to => "#{@attendee.phone}", 
	# 	  :body => "Your responded 'yes' for meal #{attendee.meal_id}!"
 #    )
	# end

	# def self.send_response_no
	# 	@client.messages.create(
	# 	  :from => @account_num, 
	# 	  :to => "#{@attendee.phone}", 
	# 	  :body => "Your responded 'no' to meal #{attendee.meal_id}"
 #    )
	# end

end
