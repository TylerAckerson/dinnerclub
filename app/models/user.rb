# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base
  has_many :meals,
    foreign_key: :owner_id

  has_many :meals_attending,
    class_name: "Attendee",
    foreign_key: :user_id

  has_many :attending_meals,
    through: :attendee_meals,
    source: :meal_id
end
