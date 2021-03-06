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
                "study": "3rd year studying in IT Master",
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

                "onVaOu": "'On Va O???' Is the French expression for 'Where are we going?'. This personnal project is inspired by a concept form a French Youtuber : Djilsi. The concept of this project is to be able to select an area of the world and generate a random marker on the map in the selected area. And then we use this marker as a destination for a trip. Working on this project was fun, and allowed me to learn about the Google Map API and how we use it. This project is not completely finished yet, but I am working on it to make it better.",
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
                "typedText" : "Etudiant en informatique, D??veloppeur web, D??veloppeur Front-End, D??veloppeur d'applications",
                "dlResume": "T??l??charger mon CV",

                "sideAbout": "?? Propos de moi",
                "sideSkills": "Mes Comp??tences",
                "sideProjects": "Mes Projets",
                "sideContact": "Contactez-moi",

                "dropbtn": "Langue",

                "titleAbout": "?? propos de moi",
                "titleSkills": "Mes Comp??tences",
                "titleProjects": "Mes Projets",
                "titleContact": "Contactez-Moi",

                "title-about": "?? propos de moi",
			    "about": "Bonjour, je suis Valentin AVELANGE, actuellement ??tudiant en informatique ?? l'??cole d'ing??nieurs du CESI de Reims. Je suis passionn?? par l'informatique et je suis toujours ?? la recherche de nouvelles choses ?? apprendre. J'aime programmer des sites et des applications avec soins. Gr??ce ?? mon ??cole et ?? ma curiosit??, je d??veloppe mes comp??tences dans le domaine du d??veloppement web et de la gestion de projets. Je suis interess?? par le d??veloppement web et plus particuli??rement par le d??veloppement Front-End.",
				"name": "Nom:",
                "birthday": "Date de Naissance: ",
                "birthdate": " 18 Octobre 2001",
                "degree": "Niveau d'??tude: ",
                "study": "3??me ann??e d'??cole d'ing??nieurs",
                "phone": "T??l??phone:",
                "address": "Adresse:",

                "managment": "Gestion de Projets",
                "teamwork": "Travail en ??quipe",

                "persoProject": "Projet personnel",
                "persoProject2": "Projet personnel",
                "proProject": "Projet professionnel",
                "proProject2": "Projet professionnel",
                "proProject3": "Projet professionnel",
                "schoolProject": "Projet scolaire",

                "onVaOu": "Ce projet personnel est inspir?? d'un concept cr???? par un Youtubeur Fran??ais : Djilsi. Le concept de ce projet est de pouvoir s??lectionner une zone du monde et g??n??rer un marqueur al??atoire sur la carte dans la zone s??lectionn??e. Et puis de l'utiliser comme destination pour un voyage. Travailler sur ce projet ??tait amusant, et m'a permis de d??couvrir l'API Google Map et comment l'utiliser. Ce projet n'est pas enti??rement termin??, mais je travaille sur celui-ci pour le rendre meilleur.",
				"heyalink": "Heyalink est un site qui r??unit tous les professionnels du domaine du BTP comme le ferait un Linkedin mais pour les personnes du monde du b??timent. J'ai effectu?? un stage de 3 mois dans l'entreprise Heyalink, d'avril ?? juillet 2021. Dans ce projet, j'ai travaill?? sur la partie Front-end du site web en utilisant le framework Laravel. J'ai appris ?? utiliser ce framework et ?? utiliser la base de donn??es du site. J'ai aussi appris ?? travailler en ??quipe au sein d'une entreprise.",
                "heyalinkNotRight" : "Malheureusement, je n'ai pas le droit de partager le code de ce projet, donc voici juste le lien vers le site :",
                "easysave" : "EasySave est un projet que nous avons effectu?? durant notre cours de C# et WPF. Nous avons cr??er une application de sauvegarde de fichiers et dossiers d'un dossier ?? un autre. La premi??re version de cette application ??tait une application console, mais nous devions changer cette application en une application WPF dans la seconde version. Nous travaillions en ??quipe sur ce projet, et j'ai travaill?? dans un groupe de 3 personnes. Nous utilisions Azure Devops pour travailler et programmer ensemble. Ce projet m'a permis de d??couvrir WPF et C#. C'??tait vraiment interessant de travailler sur ce projet et de cr??er cette application.",
                "sportDehors" : "SportDehors est un projet que nous avons lanc?? entre amis de notre ??cole en avril 2022. Cette application permettra de trouver les spots de diff??rents sports, en France pour le moment. Nous avons eu l'id??e un apr??s-midi apr??s avoir recherch?? un terrain de football pour jouer. Cette application utilise une liste du gouvernement pour trouver tous les spots en France. Je travaille sur la partie Front-end de cette application en utilisant ReactJS. J'apprend donc ?? utiliser ReactJS et ?? d??marrer et g??rer un projet en groupe.",
                "sinistres" : "'Sinistres' est  un projet que j'ai rejoint pendant mon stage dans l'entreprise 'Digiwing'. Ce stage s'est d??roul?? de Janvier ?? Avril 2022. Cette application est faite pour g??rer les r??parations ?? effectuer suite ?? un sinistres. J'ai travaill?? sur la partie Front-end de cette application en utilisant Angular. J'ai d??couvert ce framework et ses sp??cialit??s. C'??tait vraiment int??ressant de travailler sur ce projet.",
                "sinistresNotRight" : "Malheureusement, je n'ai pas le droit de partager le code de ce projet, donc voici juste le lien vers des captures d'??cran de cette application et des explications :",
                "onBoarding" : "OnBoarding est une application d??velopp??e avec l'environnement Microsoft PowerApps. J'ai d??velopp?? cette application durant mon stage dans l'entreprise 'Digiwing'. Ce stage s'est d??roul?? de Janvier ?? Avril 2022. Cette application est faite pour g??rer l'arriv??e des nouveaux employ??s dans l'entreprise. J'ai travaill?? en autonomie sur cette application, donc j'ai d??couvert l'environnement Microsoft PowerApps et j'ai appris ?? le ma??triser pour la cr??ation de cette application. C'??tait vraiment int??ressant de travailler sur ce projet. OnBoarding est maintenant utilis?? ?? l'agence o?? j'ai travaill?? et sera peut-??tre utilis?? dans d'autres agences de 'Digiwing' en France.",
                "onBoardingNotRight" : "Malheureusement, je n'ai pas le droit de partager le code de ce projet, donc voici juste le lien vers des captures d'??cran de cette application et des explications :",

                "mailName" : "Nom Complet",
                "mailAddress" : "Votre Adresse Email",
                "mailSubject" : "Objet du mail",
                "mailSend" : "Envoyer un mail",
              },
			}