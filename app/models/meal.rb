# == Schema Information
#
# Table name: meals
#
#  id            :integer          not null, primary key
#  owner_id      :integer          not null
#  meal_time     :string           not null
#  host_name     :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  meal_location :string
#  host_number   :string
#

class Meal < ActiveRecord::Base
  belongs_to :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id

  has_many :attendees,
    foreign_key: :meal_id,
    primary_key: :id

  has_many :users,
    through: :attendees,
    source: :user

  def update_attendee_yes(meal_id, attendee_id)
  end

  def update_attendee_no(meal_id, attendee_id)
  end
end
