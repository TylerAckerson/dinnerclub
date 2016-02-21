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
end
