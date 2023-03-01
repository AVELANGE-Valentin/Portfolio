const langEl = document.querySelector('.langWrap');

        const typedTextEL = document.querySelector('.typedText');
        const dlResumeEL = document.querySelector('.dlResume');

        const dropbtnEL = document.querySelector('.dropbtn');

        const titleAboutEL = document.querySelector('.titleAbout');
        const titleSkills = document.querySelector('.titleSkills');
        const titleProjects = document.querySelector('.titleProjects');
        const titleContact = document.querySelector('.titleContact');

		const link = document.querySelectorAll('a');
		const aboutEl = document.querySelector('.about');
		const nameEl = document.querySelector('.name');
        const birthdayEl = document.querySelector('.birthday');
        const birthdateEl = document.querySelector('.birthdate');
        const degreeEL = document.querySelector('.degree');
        const studyEL = document.querySelector('.study');
        const phoneEL = document.querySelector('.phone');
        const addressEL = document.querySelector('.address');

        const managmentEL = document.querySelector('.managment');
        const teamworkEL = document.querySelector('.teamwork');
        
        const persoProjectEL = document.querySelector('.persoProject');
        const persoProject2EL = document.querySelector('.persoProject2');
        const proProjectEL = document.querySelector('.proProject');
        const proProject2EL = document.querySelector('.proProject2');
        const proProject3EL = document.querySelector('.proProject3');
        const schoolProjectEL = document.querySelector('.schoolProject');

        const onVaOuEL = document.querySelector('.onVaOu');
        const heyalinkEL = document.querySelector('.heyalink');
        const heyalinkNotRightEL = document.querySelector('.heyalinkNotRight');
        const easysaveEL = document.querySelector('.easysave');
        const sportDehorsEL = document.querySelector('.sportDehors');
        const sinistresEL = document.querySelector('.sinistres');
        const sinistresNotRightEL = document.querySelector('.sinistresNotRight');
        const onBoardingEL = document.querySelector('.onBoarding');
        const onBoardingNotRightEL = document.querySelector('.onBoardingNotRight');

        const mailNameEL = document.querySelector('.mailName');
        const mailAddressEL = document.querySelector('.mailAddress');
        const mailSubjectEL = document.querySelector('.mailSubject');
        const mailSendEL = document.querySelector('.mailSend');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

                typedTextEL.innerHTML = data[attr].typedText;
                dlResumeEL.innerHTML = data[attr].dlResume;


                dropbtnEL.innerHTML = data[attr].dropbtn;

                titleAboutEL.innerHTML = data[attr].titleAbout;
                titleSkills.innerHTML = data[attr].titleSkills;
                titleProjects.innerHTML = data[attr].titleProjects;
                titleContact.innerHTML = data[attr].titleContact;
                
				aboutEl.textContent = data[attr].about;
				nameEl.textContent = data[attr].name;
                birthdayEl.textContent = data[attr].birthday;
                birthdateEl.textContent = data[attr].birthdate;
                degreeEL.textContent = data[attr].degree;
                studyEL.textContent = data[attr].study;
                phoneEL.textContent = data[attr].phone;
                addressEL.textContent = data[attr].address;

                managmentEL.textContent = data[attr].managment;
                teamworkEL.textContent = data[attr].teamwork;

                persoProjectEL.textContent = data[attr].persoProject;
                persoProject2EL.textContent = data[attr].persoProject2;
                proProjectEL.textContent = data[attr].proProject;
                proProject2EL.textContent = data[attr].proProject2;
                proProject3EL.textContent = data[attr].proProject3;
                schoolProjectEL.textContent = data[attr].schoolProject;

                onVaOuEL.textContent = data[attr].onVaOu;
                heyalinkEL.textContent = data[attr].heyalink;
                heyalinkNotRightEL.textContent = data[attr].heyalinkNotRight;
                easysaveEL.textContent = data[attr].easysave;
                sportDehorsEL.textContent = data[attr].sportDehors;
                sinistresEL.textContent = data[attr].sinistres;
                sinistresNotRightEL.textContent = data[attr].sinistresNotRight;
                onBoardingEL.textContent = data[attr].onBoarding;
                onBoardingNotRightEL.textContent = data[attr].onBoardingNotRight;

                mailNameEL.textContent = data[attr].mailName;
                mailAddressEL.textContent = data[attr].mailAddress;
                mailSubjectEL.textContent = data[attr].mailSubject;
                mailSendEL.textContent = data[attr].mailSend;
			});
		});
		
		var data = {
			  "english": 
			  {
                "typedText" : "IT Master Student, Web Developer, Computer Science Master Student, Front End Developer, Apps Developer",
                "dlResume": "Download My Resume",

                "sideAbout": "About Me",    
                "sideSkills": "My Skills",
                "sideProjects": "My Projects",
                "sideContact": "Contact Me",

                "dropbtn": "Language",

                "titleAbout": "About Me",
                "titleSkills": "My Skills",
                "titleProjects": "My Projects",
                "titleContact": "Contact Me",

                "title-about": "About me",
			    "about": "Hello, I am AVELANGE Valentin, currently studying IT (Information Technology) and Computer Science in the graduated engineering school of the CESI of Reims. I am passionate by IT and I am always looking for new things to learn. I like to programm great and beatiful websites and applications. Thanks to my school and my curiosity, I developp my skills in the field of web development and projects management. I am interested in web developement and most particularely in front-end developement.",
				"name": "Name:",
                "birthday": "Birthday: ",
                "birthdate": " 18th October 2001",
                "degree": "Degree: ",
                "study": "4th year studying in IT Master",
                "phone": "Phone:",
                "address": "Address:",

                "managment": "Project Managment",
                "teamwork": "Teamwork",

                "persoProject": "Personal project",
                "persoProject2": "Personal project",
                "proProject": "Professional project",
                "proProject2": "Professional project",
                "proProject3": "Professional project",
                "schoolProject": "School project",

                "onVaOu": "'On Va Où?' Is the French expression for 'Where are we going?'. This personnal project is inspired by a concept form a French Youtuber : Djilsi. The concept of this project is to be able to select an area of the world and generate a random marker on the map in the selected area. And then we use this marker as a destination for a trip. Working on this project was fun, and allowed me to learn about the Google Map API and how we use it. This project is not completely finished yet, but I am working on it to make it better.",
                "heyalink": "Heyalink is a website that reunite all the professionnal of the BTP domain together like a Linkedin would do but for the people in the construction world. I was in a 3 mounths internship in Heyalink from April to July 2021. In this project I worked on the front-end part of the website using Laravel. I learned how to use this framework and how to use the database. I also learned how to work in a team in a real company.",
                "heyalinkNotRight" : "Unfortunately, I don't have the right to share the code of this project, so here is just the link to the website :",
                "easysave" : "EasySave was a project we had to do during our C# and WPF course. We had to build an application to save files and folders from a folder to another. The first version of this application was a console application, but we had to change it to a WPF application in the 2nd version. We were working by teams on this project, and I worked in a group of 3 people. We used Azure Devops to work and code together. This project made me discover the WPF framework and how to work with it. It was really fun and satisfying to work on this project and to create this application.",
                "sportDehors" : "'SportDehors' is the French traduction of 'Sport Outside'. SportDehors is a project we launched with some friends in my school in April 2022. This application helps to find the spots of different sports in France for now. We had the idea an afternoon after searching for a football field to play. This application use a list of the government to find all the spots in the country. I Work on the front-end part of the application using ReactJS. I learned how to use ReactJS and how to start and manage a project and a team.",
                "sinistres" : "'Sinistres' is a project I joined during my internship in the 'Digiwing' company. This internship took place form January to April 2022. This application is made to manage the repairs to be carried out as a result of Claims. I worked on the front-end part of the application using Angular. I discovered this framework and his specialties. It was really interesting and rewarding to work on this project.",
                "sinistresNotRight" : "Unfortunately, I don't have the right to share the code of this project, so here is just the link to some screenshots of this application and some explanations :",
                "onBoarding" : "OnBoarding is an application built with the Microsoft PowerApps environnement. I built this application during my internship in the 'Digiwing' company. This internship took place form January to April 2022. This application is made to manage the onboarding of new employees in the company. I worked alone on the full application, so I discovered the Microsoft PowerApps environnement and learned how to use it to build this application. It was really interestingto work on this. OnBoarding is now used in the angency I worked in and may be used in other 'Digiwin' agencies in France.",
                "onBoardingNotRight" : "Unfortunately, I don't have the right to share the code of this project, so here is just the link to some screenshots of this application and some explanations :",

                "mailName": "Full Name",
                "mailAddress": "Your email address",
                "mailSubject" : "Subject",
                "mailSend" : "Send Mail",
            },

			  "french": 
			  {
                "typedText" : "Etudiant en informatique, Développeur web, Développeur Front-End, Développeur d'applications",
                "dlResume": "Télécharger mon CV",

                "sideAbout": "À Propos de moi",
                "sideSkills": "Mes Compétences",
                "sideProjects": "Mes Projets",
                "sideContact": "Contactez-moi",

                "dropbtn": "Langue",

                "titleAbout": "À propos de moi",
                "titleSkills": "Mes Compétences",
                "titleProjects": "Mes Projets",
                "titleContact": "Contactez-Moi",

                "title-about": "À propos de moi",
			    "about": "Bonjour, je suis Valentin AVELANGE, actuellement étudiant en informatique à l'école d'ingénieurs du CESI de Reims. Je suis passionné par l'informatique et je suis toujours à la recherche de nouvelles choses à apprendre. J'aime programmer des sites et des applications avec soins. Grâce à mon école et à ma curiosité, je développe mes compétences dans le domaine du développement web et de la gestion de projets. Je suis interessé par le développement web et plus particulièrement par le développement Front-End.",
				"name": "Nom:",
                "birthday": "Date de Naissance: ",
                "birthdate": " 18 Octobre 2001",
                "degree": "Niveau d'étude: ",
                "study": "4ème année d'école d'ingénieurs",
                "phone": "Téléphone:",
                "address": "Adresse:",

                "managment": "Gestion de Projets",
                "teamwork": "Travail en équipe",

                "persoProject": "Projet personnel",
                "persoProject2": "Projet personnel",
                "proProject": "Projet professionnel",
                "proProject2": "Projet professionnel",
                "proProject3": "Projet professionnel",
                "schoolProject": "Projet scolaire",

                "onVaOu": "Ce projet personnel est inspiré d'un concept créé par un Youtubeur Français : Djilsi. Le concept de ce projet est de pouvoir sélectionner une zone du monde et générer un marqueur aléatoire sur la carte dans la zone sélectionnée. Et puis de l'utiliser comme destination pour un voyage. Travailler sur ce projet était amusant, et m'a permis de découvrir l'API Google Map et comment l'utiliser. Ce projet n'est pas entièrement terminé, mais je travaille sur celui-ci pour le rendre meilleur.",
				"heyalink": "Heyalink est un site qui réunit tous les professionnels du domaine du BTP comme le ferait un Linkedin mais pour les personnes du monde du bâtiment. J'ai effectué un stage de 3 mois dans l'entreprise Heyalink, d'avril à juillet 2021. Dans ce projet, j'ai travaillé sur la partie Front-end du site web en utilisant le framework Laravel. J'ai appris à utiliser ce framework et à utiliser la base de données du site. J'ai aussi appris à travailler en équipe au sein d'une entreprise.",
                "heyalinkNotRight" : "Malheureusement, je n'ai pas le droit de partager le code de ce projet, donc voici juste le lien vers le site :",
                "easysave" : "EasySave est un projet que nous avons effectué durant notre cours de C# et WPF. Nous avons créer une application de sauvegarde de fichiers et dossiers d'un dossier à un autre. La première version de cette application était une application console, mais nous devions changer cette application en une application WPF dans la seconde version. Nous travaillions en équipe sur ce projet, et j'ai travaillé dans un groupe de 3 personnes. Nous utilisions Azure Devops pour travailler et programmer ensemble. Ce projet m'a permis de découvrir WPF et C#. C'était vraiment interessant de travailler sur ce projet et de créer cette application.",
                "sportDehors" : "SportDehors est un projet que nous avons lancé entre amis de notre école en avril 2022. Cette application permettra de trouver les spots de différents sports, en France pour le moment. Nous avons eu l'idée un après-midi après avoir recherché un terrain de football pour jouer. Cette application utilise une liste du gouvernement pour trouver tous les spots en France. Je travaille sur la partie Front-end de cette application en utilisant ReactJS. J'apprend donc à utiliser ReactJS et à démarrer et gérer un projet en groupe.",
                "sinistres" : "'Sinistres' est  un projet que j'ai rejoint pendant mon stage dans l'entreprise 'Digiwing'. Ce stage s'est déroulé de Janvier à Avril 2022. Cette application est faite pour gérer les réparations à effectuer suite à un sinistres. J'ai travaillé sur la partie Front-end de cette application en utilisant Angular. J'ai découvert ce framework et ses spécialités. C'était vraiment intéressant de travailler sur ce projet.",
                "sinistresNotRight" : "Malheureusement, je n'ai pas le droit de partager le code de ce projet, donc voici juste le lien vers des captures d'écran de cette application et des explications :",
                "onBoarding" : "OnBoarding est une application développée avec l'environnement Microsoft PowerApps. J'ai développé cette application durant mon stage dans l'entreprise 'Digiwing'. Ce stage s'est déroulé de Janvier à Avril 2022. Cette application est faite pour gérer l'arrivée des nouveaux employés dans l'entreprise. J'ai travaillé en autonomie sur cette application, donc j'ai découvert l'environnement Microsoft PowerApps et j'ai appris à le maîtriser pour la création de cette application. C'était vraiment intéressant de travailler sur ce projet. OnBoarding est maintenant utilisé à l'agence où j'ai travaillé et sera peut-être utilisé dans d'autres agences de 'Digiwing' en France.",
                "onBoardingNotRight" : "Malheureusement, je n'ai pas le droit de partager le code de ce projet, donc voici juste le lien vers des captures d'écran de cette application et des explications :",

                "mailName" : "Nom Complet",
                "mailAddress" : "Votre Adresse Email",
                "mailSubject" : "Objet du mail",
                "mailSend" : "Envoyer un mail",
              },
			}