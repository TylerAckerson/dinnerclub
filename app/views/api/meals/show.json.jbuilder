json.extract! @meal, :id, :owner_id, :host_name, :host_number, :activity, :meal_location, :meal_time

# json.attendees do
#   json.array! @meal.users do |user|
#     json.extract! user, :id
#   end
# end
