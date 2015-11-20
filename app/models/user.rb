class User < ActiveRecord::Base
  has_many :meals, foreign_key: :owner_id
  has_many :attendee_meals,
    class_name: "Attendee",
    foreign_key: :user_id
  has_many :attending_meals,
    through: :attendee_meals,
    source: :meal_id
end
