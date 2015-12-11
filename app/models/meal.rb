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
