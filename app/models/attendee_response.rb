# == Schema Information
#
# Table name: attendee_responses
#
#  id            :integer          not null, primary key
#  from          :string
#  response_text :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class AttendeeResponse < ActiveRecord::Base
end
