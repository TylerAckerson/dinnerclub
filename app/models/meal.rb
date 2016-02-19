# == Schema Information
#
# Table name: meals
#
#  id            :integer          not null, primary key
#  owner_id      :integer          not null
#  location_id   :integer
#  meal_time     :datetime         not null
#  main_course   :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  max_attendees :integer
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
end
