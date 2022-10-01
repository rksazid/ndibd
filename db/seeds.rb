# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  'nationaldawah@gmail.com'
]

users.each do |email|
  user = User.find_or_initialize_by(email: email)
  next if user.persisted?

  user.password = "123456"
  user.password_confirmation = "123456"
  user.super_admin = true
  user.first_name = 'Super'
  user.last_name = 'Admin'
  user.phone_no = "01736227158"
  user.save
end
