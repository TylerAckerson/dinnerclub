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
