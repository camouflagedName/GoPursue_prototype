# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Career.delete_all

Career.create(title: 'Communications Coordinator', name: 'Rosie', favorite:'I like being creative and trying new marketing campaigns. My favorite jobs are ones where everyone feels like their opinions and input matter.', skills: 'Writing & Editing, Communicating, Computer/technology (e.g. coding, digital design, CAD, Adobe, Excel, SPSS, etc.)', advice: "Think about what matters most to you and prioritize that when you apply to jobs. Examples: work-life balance, a good team, ability to be creative, etc.", education: "Bachelor's Degree", pay: '$61K - 90K', environment: 'Office', bookmark: 'false', hashtag: "#comms", image: 'Rosemary Grant.png')
Career.create(title: 'Electronic Resources Coordinator', name: 'Emalee', favorite:'Making someone feel happy at the library. Putting the perfect finishing touches on a website. Collaborating with coworkers.', skills: "Reading & Synthesizing, Communicating, Computer/technology (e.g. coding, digital design, CAD, Adobe, Excel, SPSS, etc.)", advice: "Librarianship is a satisfying career and you can take a wide variety of paths to get there. If you're smart, always curious, and happy helping others, this could be a great profession for you. Libraries are a cornerstone of civilization that bring immense value to the world!", education: "Master's Degree", pay: '$61K - 90K', environment: 'Library', bookmark: 'false', hashtag: '#tech', hashtag: '#books', hashtag: 'education', image: 'Kee Space.png')
Career.create(title: 'Senior Corporate Relations Officer', name: 'Meghan', favorite:'Creating impactful relationships. My coworkers and partners are all intelligent, passionate, and driven by purpose. It is magic when you can work together to create a powerful program that does good for the world.', skills: "Writing & Editing, Reading & Synthesizing, Communicating", advice: "Competition for sustainability jobs is fierce. Explore majors that are high in-demand (like fundraising or communications) because those will still allow you to get a job with purpose. Also, get internships/jobs at different types of organizations see if you prefer a startup vibe or a well-established organization.", education: "Bachelor's Degree", pay: '$90K', environment: 'Office', bookmark: 'false', hashtag: '', image: 'Meghan Ball.jpg')
Career.create(title: 'VP Business Intelligence and Analytics', name: 'Judi', favorite:'Creating new ways of looking at the business. Discovering insights that increase sales and growth.', skills: "Communicating, Analyzing & Applying logic, Hard Math (e.g. carrying out calculations, coding)", advice: "Be curious. Ask questions. Get comfortable with math and persevering through solving tough problems.", education: "Bachelor's Degree", pay: '$121K +', environment: 'Office/Home', bookmark: 'false', hashtag: '', image: 'Judith Breisch.jpg')
Career.create(title: 'Architectural Designer', name: 'Andrea', favorite:'Creating something and seeing it built.', skills: "Communicating, Computer/technology (e.g. coding, digital design, CAD, Adobe, Excel, SPSS, etc.)", advice: "Find an office that does the kind of work you find interesting. Seek out opportunities to explore the different jobs within architecture like programming, concept design, project management, etc.", education: "Bachelor's Degree", pay: '$61K - 90K', environment: 'Office', bookmark: 'false', hashtag: '', image: 'Andrea Martinez.jpg')
Career.create(title: 'Senior Director of Marketing', name: 'David', favorite:'The incredible strength and collaboration of the travel and tourism industry. Tourism and hospitality professionals are some of the most welcoming people. Even competitors are willing to help each other!', skills: "Writing & Editing, Communicating, Creatively designing", advice: "Always be curious and open to learning new things. Communication, collaboration and creating connections are key.", education: "Bachelor's Degree", pay: '$61K - 90K', environment: 'Office', bookmark: 'false', hashtag: '', image: 'David Breisch.jpg')
Career.create(title: 'Eye Surgeon', name: 'Mike', favorite: 'Operating. It is stimulating and rewarding. There are always new techniques and devices to learn or develop.', skills: "Communicating, Attention to detail, Hand-eye coordination", advice: "It's a long road. Work smart and enjoy yourself along the way.", education: 'Special track (includes med/vet school, residency, fellowship)', pay: '300-500K', environment: "Private clinic and surgery center", bookmark: 'false', hashtag: '', image: 'Michael Henry MD.jpg')
Career.create(title: 'Doctor of Audiology Resident', name: 'Luke', favorite:"I love providing re/habilitation for individuals with hearing loss, especially children. I love seeing a kids' performance in school and life improve when they have appropriate access to language. I also favor working with the Deaf population -- I'm fluent in American Sign Language!", skills: "Writing & Editing, Research & Experimentation, Communicating", advice: "An aspiring audiologist should be passionate about education, communication and language access. It takes years to obtain the Doctor of Audiology (Au.D.), which is a clinical doctorate degree. In total, the young person can expect themselves to be in college for a total of 7-8 years and have many clinical rotations, including a residency.", education: 'Special track (includes med/vet school, residency, fellowship)', pay: '$61K - 90K', environment: 'Hospital', bookmark: 'false', hashtag: '', image: 'Luke Hinson.jpeg')
Career.create(title: 'Personal Trainer & Nutrition Coach', name: 'Coach Brandon', favorite:"Building relationships, changing lives, and being able to workout myself in my spare time.", skills:"Communicating, Understanding human behavior, Physical fitness (e.g. strength, agility, flexibility)", advice: "Learn how to communicate and empathize with people.", education: 'GED/High School Diploma', pay: '$61K - 90K,', environment: 'Remote', bookmark: 'false', hashtag: '', image: 'Brandon Woolfolk.jpeg')
Career.create(title: 'Emergency Medicine Physician', name: 'Ife', favorite: "I get to help someone feel better on their worst day. I love the instant gratification when I intervene successfully, plus the career is a good return on investment.", skills:"Reading & Synthesizing, Communicating, Analyzing & Applying logic, Applying hard knowledge of anatomy, physiology, and other medical basic science", advice: "Be resilient! Progression not perfection.", education: 'Special track (includes med/vet school, residency, fellowship)', pay: '$121K +', environment: 'Hospital', bookmark: 'false', hashtag: '', image: 'Ife Adabonyan.jpg')
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
#Career.create(title: "", name: "", favorite: "", skills: "", advice: "", education: "", pay: "", environment: "", bookmark: 'false', hashtag: "", image: "")
