const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const aboutEl = document.querySelector('.about');
		const nameEl = document.querySelector('.name');
        const birthdayEl = document.querySelector('.birthday');
        const birthdateEl = document.querySelector('.birthdate');
        const degreeEL = document.querySelector('.degree');
        const studyEL = document.querySelector('.study');
        const phoneEL = document.querySelector('.phone');
        const addressEL = document.querySelector('.address');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				aboutEl.textContent = data[attr].about;
				nameEl.textContent = data[attr].name;
                birthdayEl.textContent = data[attr].birthday;
                birthdateEl.textContent = data[attr].birthdate;
                degreeEL.textContent = data[attr].degree;
                studyEL.textContent = data[attr].study;
                phoneEL.textContent = data[attr].phone;
                addressEL.textContent = data[attr].address;
			});
		});
		
		var data = {
			  "english": 
			  {
                "title-about": "About me",
			    "about": "Hello, I am AVELANGE Valentin, currently studying IT (Information Technology) and Computer Science in the graduated engineering school of the CESI of Reims. I am passionate by IT and I am always looking for new things to learn. I like to programm great and beatiful websites and applications. Thanks to my school and my curiosity, I developp my skills in the field of web development and projects management. I am interested in web developement and most particularely in front-end developement.",
				"name": "Name:",
                "birthday": "Birthday: ",
                "birthdate": " 18th October 2001",
                "degree": "Degree: ",
                "study": "3rd year studying in IT Master",
                "phone": "Phone:",
                "address": "Address:",
			  },

			  "french": 
			  {
                "title-about": "À propos de moi",
			    "about": "Bonjour, je suis Valentin AVELANGE, actuellement étudiant en informatique à l'école d'ingénieurs du CESI de Reims. Je suis passionné par l'informatique et je suis toujours à la recherche de nouvelles choses à apprendre. J'aime programmer des sites et des applications avec soins. Grâce à mon école et à ma curiosité, je développe mes compétences dans le domaine du développement web et de la gestion de projets. Je suis interessé par le développement web et plus particulièrement par le développement Front-End.",
				"name": "Nom:",
                "birthday": "Date de Naissance: ",
                "birthdate": " 18 Octobre 2001",
                "degree": "Niveau d'étude: ",
                "study": "3ème année d'école d'ingénieurs",
                "phone": "Téléphone:",
                "address": "Adresse:",
				},
			}