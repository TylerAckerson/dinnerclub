json.extract! @meal, :id, :owner_id, :location_id, :meal_time, :main_course

json.attendees do
  json.array! @meal.users do |user|
    json.extract! user, :id
  end
end
