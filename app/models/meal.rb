class Meal < ActiveRecord::Base
  belongs_to :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  has_many :users,
    class_name: "Attendee",
    foreign_key: :meal_id
  has_many :attendees,
    through: :users,
    source: :user
end
