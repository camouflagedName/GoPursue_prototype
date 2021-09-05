# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Career.delete_all

Career.create(title: 'Communications Coordinator', education: 'Bachelor Degree', pay: '$61K - 90K', environment: 'Office', description: 'I interact with a few close teammates every day., I interact with teammates and new people every day.', image: 'Rosemary Grant.png')
Career.create(title: 'Electronic Resources Coordinator', education: 'Master Degree', pay: '$61K - 90K', environment: 'Library', description: 'I interact with teammates and new people every day.', image: 'Kee Space.png')
Career.create(title: 'Senior Corporate Relations Officer', education: 'Bachelor Degree', pay: '$90K', environment: 'Office', description: 'I interact with a few close teammates every day.', image: 'Meghan Ball.jpg')
Career.create(title: 'VP Business Intelligence and Analytics', education: 'Bachelor Degree', pay: '$121K +', environment: 'Office/Home', description: 'I interact with teammates and new people every day.', image: 'Judith Breisch.jpg')
Career.create(title: 'Architectural Designer', education: 'Bachelor Degree', pay: '$61K - 90K', environment: 'Office', description: 'I interact with a few close teammates every day.', image: 'Andrea Martinez.jpg')
Career.create(title: 'Senior Director of Marketing', education: 'Bachelor Degree', pay: '$61K - 90K', environment: 'Office', description: 'I interact with a few close teammates every day., I interact with teammates and new people every day.', image: 'David Breisch.jpg')
Career.create(title: 'Eye Surgeon', education: 'Special track (includes med/vet school, residency, fellowship)', pay: '300-500K', environment: 'Hospital', description: 'I interact with 50+ people every day.', image: 'Michael Henry MD.jpg')
Career.create(title: 'Doctor of Audiology Resident', education: 'Special track (includes med/vet school, residency, fellowship)', pay: '$61K - 90K', environment: 'Hospital', description: 'I interact with teammates and new people every day.', image: 'Luke Hinson.jpeg')
Career.create(title: 'Personal Trainer & Nutrition Coach', education: 'GED/High School Diploma', pay: '$61K - 90K,', environment: 'Remote', description: 'I interact with a few close teammates every day., I interact with teammates and new people every day., I interact with 50+ people every day.', image: 'Brandon Woolfolk.jpeg')
Career.create(title: 'Emergency Medicine Physician', education: 'Special track (includes med/vet school, residency, fellowship)', pay: '$121K +', environment: 'Hospital', description: 'I interact with teammates and new people every day., I interact with 50+ people every day.', image: 'Ife Adabonyan.jpg')
