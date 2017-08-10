var quiz = new PersonalityQuizzer();
	quiz.set("title","What Should I Do for Open Access Week?")
	quiz.addQuestion({ 
		color: "#FFAE0D",
		title: "How much experience do you have working on open access week activities?",
		answers: [
			{ 
				text: "None",
				result: 1
			},
			{ 
				text: "Low",
				result: 2
			},
			{ 
				text: "Medium",
				result: 3
			},
			{ 
				text: "High",
				result: 4
			},
		]
	});


quiz.addQuestion({ 
		color: "#E8860C",
		title: "Which audience are you the most interested in reaching?",
		answers: [
			{ 
				text: "Faculty or Researchers",
				result: 1
			},
			{ 
				text: "Students",
				result: 2
			},
			{ 
				text: "Librarians or Colleagues",
				result: 3
			},
			{ 
				text: "Public or Wide Audience",
				result: 4
			},

quiz.addQuestion({ 
		color: "#FF6900",
		title: "Choose the strengths that best describe you.",
		answers: [
			{ 
				text: "Connecting to others and working together",
				result: 1
			},
			{ 
				text: "Enthusiasm and learning from experiements",
				result: 2
			},
			{ 
				text: "Knowledge and Experience",
				result: 3
			},
			{ 
				text: "New ideas and learning new things",
				result: 4
			},
quiz.addQuestion({ 
		color: "#E8460C",
		title: "How much do you partner with others for open access week?",
		answers: [
			{ 
				text: "It's mostly Me",
				result: 1
			},
			{ 
				text: "Primarily Me, with some help from others",
				result: 2
			},
			{ 
				text: "It's a team effort!",
				result: 3
			},
			{ 
				text: "Working with partners outside my organization",
				result: 4
			},
		]
	});
		quiz.addQuestion({ 
		color: "#FF290D",
		title: "How much experience do you have working on open access week activities?",
		answers: [
			{ 
				text: "None",
				result: 1
			},
			{ 
				text: "Low",
				result: 2
			},
			{ 
				text: "Medium",
				result: 3
			},
			{ 
				text: "High",
				result: 4
			},
		]
	});
quiz.addQuestion({ 
		color: "#FFAE0D",
		title: "How much experience do you have working on open access week activities?",
		answers: [
			{ 
				text: "None",
				result: 1
			},
			{ 
				text: "Low",
				result: 2
			},
			{ 
				text: "Medium",
				result: 3
			},
			{ 
				text: "High",
				result: 4
			},
		]
	});
	
			

	quiz.addResults([
		{
			id: 1,
			text: "You're a New Natalia You might be new new to open advocacy, but your new ideas and enthusiasm to celebrate Open Access Week is inspiring! If you are organizing outreach and events primarily alone, you will needs materials and ideas to raise awareness at your institution. Suggested activities for New Natalias: social media campaign, film screening and discussion or sending factsheets. Resources for New Natalia: 100 Stories of Impact, The Internet's Own Boy (film and background), factsheets and other resources."
		},
		{
			id: 2,
			text: " You're an Amped Amal You may be thrilled at the success of last year, and want to grow your institution’s Open Access Week events this year! You might primarily be organizing the week alone, but would like to involve colleagues in planning. An Amal might their zeal and ability to experiment to get more faculty engagement with the institutional repository. With solid experience under your belt, all you need is more resources and collaborators to break your previous record. Suggested activities for Amped Amal: an Upload-a-thon with department liaisons, a workshop with trivia night, or a meeting with with administration to advance open. Resources: workshop slidedeck, trivia ideas, quiz questions, upload-a-thon email template and talking points for administration."
		},
		{
			id: 3,
			text: "You're a Growing Gene! With the experience, knowledge, and resources of a seasoned advocate it may be your goal to grow Open Access Week and produce more tangible advocacy results throughout the year. You may be an advocate in a well-developed department at a research-intensive institution that offers you a small budget. You're most likely collaborating with a handful of very supportive colleagues to plan Open Access week events this year. Consider targeting a new audience, such as students, for wider impact. Suggested activities for Growing Genes: panel of faculty and students, invited speakers, discuss a resolution with administration, request student organizations to sign the Right to Research resolution or make a statement in support of open. Resources for Growing Genes: Right to Research brochures, resolution language, talking points for administration, and the Open Speakers database.
"
		},
		{
			id: 4,
			text: "You're a Connected Cate! Building relationships and coalitions is your strength! It's possible you live in a city with multiple institutions and organizations interested in Open Access. You’d like to take these connections and work together on larger events for this Open Access Week. If you are hoping to leverage recent conversations about open to create taskforces with deliverables during Open Access Week, here is a place to start. Suggested activities for Connected Cates: user support and training on tools for open, meeting with political officials to discuss policy or conducting multiple workshops across institutions. Resources for Connected Cates: talking points for administrations, workshop, edit-a-thons, data day training materials, doodle and sched for coordinating events.
"
		},
	]);
