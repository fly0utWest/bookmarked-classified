INSERT INTO DB_CINEMA.USERS (login, pass, role, photo, background, bio)
VALUES
('Nikita', '$2y$10$4pjQxWjgSOdAbj7bIUeKzOmI4aPN8gL4LIebCqIv8pozlSFW5AGnK', 'USER', 'picture', 'background', 'bioooooooooo'), --pass
('Denis', '$2y$10$M3KKGqHAPL1haRYO.UzAkunqQgCVcaTg38vwcwZA7QjG.jjgOia6u','USER', 'picture', 'background', 'shmio'), --anotherpass
('Zeliboba', 'pass','USER', 'picture', 'background', 'solemio');

INSERT INTO DB_CINEMA.USERS_FAVOURED_MOVIES (user_id, movie_id)
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4);

INSERT INTO DB_CINEMA.USERS_WATCHED_MOVIES (user_id, movie_id)
VALUES
(1, 5),
(1, 6),
(1, 7),
(2, 8);

INSERT INTO DB_CINEMA.USERS_WATCH_LATER_MOVIES (user_id, movie_id)
VALUES
(1, 9),
(1, 10),
(1, 11),
(2, 12);

INSERT INTO DB_CINEMA.MOVIES(title, background, cover, director, description, year, slogan, cast, studio, rating)
VALUES
('Побег из Шоушенка', 'shawshank-background.jpg', 'shawshank-cover.webp', 'Фрэнк Дарабонт', 'Двое заключенных мужчин со временем подружились, находя утешение и в конечном итоге искупление через акты обычной доброты.', 1994, 'Страх может удерживать вас в плену. Надежда может освободить вас.', 'Тим Роббинс, Морган Фриман', 'Касл Рок', 2.0),
('Крестный отец', 'godfather-background.jpg', 'godfather-cover.webp', 'Фрэнсис Форд Коппола', 'Стареющий патриарх организованной преступной династии передает контроль над своей тайной империей своему неохотному сыну.', 1972, 'Предложение, от которого нельзя отказаться.', 'Марлон Брандо, Аль Пачино, Джеймс Каан', 'Paramount', 5.1),
('Темный рыцарь', 'dark-knight-background.jpg', 'dark-knight-cover.webp', 'Кристофер Нолан', 'Когда угроза, известная как Джокер, появляется из своего таинственного прошлого, он наводит хаос и разрушения на народ Готэма.', 2008, 'Почему так серьезно?', 'Кристиан Бэйл, Хит Леджер, Аарон Экхарт', 'ДиСи', 1.2),
('Криминальное чтиво', 'pulp-fiction-background.jpg', 'pulp-fiction-cover.jpg', 'Квентин Тарантино', 'Жизни двух наемных убийц, боксера, гангстера и его жены, а также пары бандитов из кафе переплетаются в четырех историях о насилии и искуплении.', 1994, 'То, что ты персонаж, не значит, что у тебя есть характер.', 'Джон Траволта, Ума Турман, Сэмюэл Л. Джексон', 'Джерси филмз', 6.65),
('Форрест Гамп', 'forrest-gump-background.jpg', 'forrest-gump-cover.jpg', 'Роберт Земекис', 'Президентства Кеннеди и Джонсона, события во Вьетнаме, Уотергейт и другие исторические события разворачиваются с точки зрения мужчины из Алабамы с IQ 75, единственное желание которого - воссоединиться со своей детской подругой.', 1994, 'Жизнь как коробка шоколада... никогда не знаешь, что тебе попадется.', 'Том Хэнкс, Робин Райт, Гэри Синиз', 'Paramount', 4.39),
('Матрица', 'matrix-background.jpg', 'matrix-cover.jpg', 'Братья Вачовски', 'Компьютерный хакер узнает от загадочных повстанцев о настоящей природе его реальности и своей роли в войне против ее контроллеров.', 1999, 'Добро пожаловать в реальный мир.', 'Киану Ривз, Лоуренс Фишбёрн, Кэрри-Энн Мосс', 'Ворнер бразерс', 10),
('Интерстеллар', 'interstellar-background.jpg', 'interstellar-cover.jpg', 'Кристофер Нолан', 'Команда исследователей путешествует через кротовую нору в космосе в попытке обеспечить выживание человечества.', 2014, 'Человечество родилось на Земле. Оно не должно было умереть здесь.', 'Мэттью МакКонахи, Энн Хэтэуэй, Джессика Честейн', 'Paramount', 9.2),
('Ход королевы', 'queens-gambit-background.webp', 'queens-gambit-cover.webp', 'Скотт Фрэнк', 'По сиротскому приюту 1950-х годов молодая девушка выявляет удивительный талант к шахматам и начинает непростой путь к становлению чемпионкой.', 2020, 'Величайший путь к власти лежит в знании своих слабостей.', 'Аня Тейлор-Джой', 'Netflix', 2.0),
('Дома', 'inside-bo-background.webp', 'inside-bo-cover.jpg', 'Бо Бёрнем', 'Комедийное специальное предложение, созданное и снятое Бо Бёрнемом, изолированно без участия команды или аудитории, освещает различные социальные темы.', 2021, 'Смех во времена изоляции.', 'Бо Бёрнем', 'Netflix', 8.5),
('Очень странные дела', 'stranger-things-background.webp', 'stranger-things-cover.webp', 'Даффер Братья', 'После исчезновения мальчика в маленьком городе начинают происходить странные события, включая появление загадочной девочки.', 2016, 'Когда мир переворачивается вверх дном.', 'Вайнона Райдер, Дэвид Харбор', 'Netflix', 7.8),
('Конь БоДжек', 'bojack-background.webp', 'bojack-cover.webp', 'Рафаэль Боб-Ваксберг', 'Звезда одного из популярных телешоу 90-х, Конь БоДжек, пытается найти своё место в жизни, борясь с алкогольной зависимостью и личными демонами.', 2014, 'Куда ты идешь, когда на вершине уже некуда подняться?', 'Уилл Арнетт, Эми Седарис', 'Netflix', 9.5),
('Скотт Пилигрим жмёт на газ', 'scott-pilgrim-background.webp', 'scott-pilgrim-cover.webp', 'Эдгар Райт', 'Молодой музыкант Скотт Пилгрим должен победить семерых бывших возлюбленных своей новой девушки, чтобы выиграть её сердце.', 2023, 'Получи свою девушку мечты. Победи её семерых бывших.', 'Майкл Сера, Мэри Элизабет Уинстед', 'Netflix', 7.7),
('Черное зеркало', 'black-mirror-background.webp', 'black-mirror-cover.webp', 'Чарли Брукер', 'Антология о технологиях и самых темных уголках человеческой психики.', 2011, 'Будущее не столь радужное, как кажется.', 'Брайс Даллас Ховард, Джесси Племонс', 'Netflix', 8.8),
('Йеллоустоун', 'yellowstone-background.webp', 'yellowstone-cover.webp', 'Тейлор Шеридан', 'Драма о семейной династии, владеющей крупнейшим в США ранчо, противостоящей корпорациям и индейским резервациям.', 2018, 'Земля стоит борьбы.', 'Кевин Костнер, Люк Граймс', 'Paramount', 7.5),
('Твин Пикс', 'twin-peaks-background.webp', 'twin-peaks-cover.webp', 'Дэвид Линч', 'Таинственное убийство школьницы в маленьком городке раскрывает его секреты и тайны жителей.', 1990, 'Все не то, чем кажется.', 'Кайл МакЛахлан, Шерил Ли', 'Paramount', 9.0),
('Миссия невыполнима', 'mission-impossible-background.webp', 'mission-impossible-cover.webp', 'Брюс Джеллер', 'Сериал о секретных агентах, выполняющих невозможные миссии по всему миру.', 1966, 'Выберите свою миссию.', 'Питер Грейвс, Мартин Ландау', 'Paramount', 8.0),
('Игра престолов', 'game-of-thrones-background.webp', 'game-of-thrones-cover.webp', 'Дэвид Бениофф', 'Эпическая борьба за власть в вымышленном королевстве Вестерос.', 2011, 'Когда играешь в игру престолов, ты либо выигрываешь, либо умираешь.', 'Питер Динклэйдж, Эмилия Кларк', 'HBO', 9.3),
('Шерлок', 'sherlock-background.webp', 'sherlock-cover.webp', 'Стивен Моффат', 'Современная интерпретация классических историй о самом известном детективе.', 2010, 'Преступление есть, осталось найти преступника.', 'Бенедикт Камбербэтч, Мартин Фриман', 'BBC', 9.1),
('Друзья', 'friends-background.webp', 'friends-cover.webp', 'Дэвид Крейн', 'Жизни, любовные отношения и смешные приключения шестерых друзей в Нью-Йорке.', 1994, 'Друзья навсегда.', 'Дженнифер Энистон, Кортни Кокс', 'NBC', 8.9),
('Ведьмак', 'witcher-background.webp', 'witcher-cover.webp', 'Лорен Шмидт Хиссрих', 'История о судьбе Геральта из Ривии, одинокого охотника на чудовищ, пытающегося найти свое место в мире, где люди зачастую оказываются намного хуже монстров.', 2019, 'Судьба ждет.', 'Генри Кавилл, Аня Чалотра', 'Netflix', 8.2),
('Офис', 'the-office-background.webp', 'the-office-cover.webp', 'Грег Дэниелс', 'Повседневная жизнь сотрудников офиса в маленьком городке, полная юмористических и смешных моментов.', 2005, 'Лучшее место работы.', 'Стив Карелл, Дженна Фишер', 'NBC', 8.8);

INSERT INTO DB_CINEMA.ARTICLES(title, publication_date, text, cover)
VALUES
('Бешеные псы: игра Тарантино на 30 тысяч долларов', '15 марта 2024', 'В 1992 году малоизвестный режиссер Квентин Тарантино взорвал кинемир своим дебютным полнометражным фильмом "Бешеные псы". Этот напряженный, диалогами насыщенный криминальный триллер не только заложил основу для уникального стиля Тарантино, но и навсегда изменил восприятие жанра. Сюжет фильма, разворачивающийся в основном в одном помещении и рассказывающий о последствиях неудачного ограбления банка, демонстрирует гениальное мастерство режиссера работать с напряжением и драматизмом. "Бешеные псы" прославились своими мемориальными сценами, остроумными диалогами и неожиданной жестокостью, став культовым хитом и обретя многочисленную армию поклонников. Этот фильм не только запустил карьеру Тарантино как одного из самых влиятельных режиссеров современности, но и оказал значительное влияние на кино 90-х. Фильм выделяется уникальным подходом к рассказыванию истории, использованием нелинейного повествования и акцентом на развитии персонажей, что стало визитной карточкой Тарантино. Сцены насилия и крови, характерные для его стиля, вызвали много споров и обсуждений, однако именно эти элементы в сочетании с остроумным диалогом и непредсказуемым сюжетом привнесли в фильм уникальность и оригинальность. "Бешеные псы" остаются важной вехой в истории кино, демонстрируя, как низкобюджетное произведение может оказать глубокое влияние на культуру и стать классикой.
', 'reservoir-dogs-cover.jpg'),
('Интерстеллар: Путешествие Нолана через время и пространство', '22 марта 2024', 'Кристофер Нолан, мастер современного кинематографа, представил миру "Интерстеллар" в 2014 году. Этот фильм стал одним из самых амбициозных проектов режиссера, исследуя темы любви, жертвы и выживания человечества на фоне угасающей Земли. "Интерстеллар" поразил зрителей визуальными эффектами и сложной нарративной структурой, став не только кинематографическим, но и научным достижением. Фильм исследует возможности межзвездных путешествий, черные дыры и теорию относительности, представляя сложные научные концепции в захватывающем и эмоциональном сюжете. Нолан сотрудничал с физиком Кипом Торном для обеспечения научной точности, что придало фильму дополнительную глубину и реализм. "Интерстеллар" вызвал широкие дискуссии среди зрителей и критиков о его научных и философских аспектах, а также о том, как любовь может служить мощным двигателем человеческих действий даже в самых отчаянных условиях. С его помощью Нолан не только задал вопросы о будущем человечества и его месте во Вселенной, но и предложил вдохновляющее видение того, как наука и человеческие эмоции могут вместе преодолеть кажущиеся непреодолимыми препятствия.', 'interstellar-cover.webp'),
('Властелин колец: Возвращение короля – Эпическое завершение трилогии Джексона', '29 марта 2024', 'Питер Джексон завершил свою эпическую трилогию "Властелин колец" фильмом "Возвращение короля" в 2003 году. Этот фильм не только стал кульминацией величайшего фэнтезийного приключения в истории кино, но и удостоился 11 премий Оскар, включая лучший фильм. Джексон доказал, что даже самые масштабные и фантастические миры могут быть оживлены на экране с невероятной детализацией и глубиной.', 'lotr-cover.webp'),
('Грань будущего: Революционный луп времени от Дага Лаймана', '5 апреля 2024', 'В 2014 году Даг Лайман представил "Грань будущего" – фильм, который смешал элементы научной фантастики, боевика и неожиданный юмор. Сюжет, вращающийся вокруг концепции временного петли, в которую попадает главный герой, играющий против инопланетного вторжения, был высоко оценен критиками за оригинальность подхода и мастерство исполнения. Этот кинематографический эксперимент удачно сочетает в себе напряжение боевика и драматические моменты, предлагая зрителям не только захватывающее зрелище, но и глубокие размышления о возможности второго шанса и изменении судьбы. Главный герой, исполненный Томом Крузом, проходит путь от трусливого офицера до героя, способного изменить ход войны с инопланетным врагом. Взаимодействие между персонажами, в частности, с участием Эмили Блант, добавляет истории эмоциональную глубину и динамику. Фильм особенно выделяется своими инновационными визуальными эффектами и мастерски поставленными боевыми сценами, которые усиливают ощущение находящегося в петле времени безвыходного положения. "Грань будущего" не просто развлекает, но и заставляет задуматься о ценности каждого момента жизни и возможностях, которые открываются перед человеком, готовым бороться и меняться.', 'edge-of-tomorrow-cover.webp'),
('Ла-Ла Ленд: Джазовая мелодия любви от Дэмьена Шазелла', '12 апреля 2024', 'Дэмьен Шазелл взял мир кино штурмом со своим музыкальным шедевром "Ла-Ла Ленд" в 2016 году. Эта восхитительная история о стремлениях и любви в современном Лос-Анджелесе была удостоена 6 премий Оскар, включая лучшего режиссера, и стала одним из самых любимых музыкальных фильмов нового поколения. "Ла-Ла Ленд" мастерски сочетает в себе визуальную красоту, музыкальные номера и глубоко человеческую историю, разворачивающуюся между двумя мечтающими душами – джазовым музыкантом и начинающей актрисой. Через их отношения фильм затрагивает темы самореализации, жертв и компромиссов на пути к своей мечте. Великолепная музыка и оригинальная хореография делают каждую сцену незабываемой, а визуальный стиль фильма – настоящим праздником для глаз. "Ла-Ла Ленд" не просто фильм; это письмо любви к мечтам, искусству и кинематографу, показывающее, как важно следовать своему пути, несмотря на все трудности.', 'lalaland-cover.webp'),
('Дюна: Песчаные миры Дени Вильнёва', '26 апреля 2024', 'Дени Вильнёв представил свою интерпретацию "Дюны" Фрэнка Герберта в 2021 году, создав визуально поразительный и глубоко философский фильм. Эта эпическая сага о межгалактической политике, экологии и духовности вновь привлекла внимание к классическому научно-фантастическому роману, предложив зрителям не только развлечение, но и повод для размышлений. Вильнёв сумел перенести на экран сложность и грандиозность мира "Дюны", представив зрителям уникальную вселенную, наполненную сложными персонажами, масштабными битвами и захватывающими пейзажами планеты Арракис. Особенное внимание в фильме уделено темам выбора, предопределенности и влияния человека на окружающую среду, что делает "Дюну" актуальной и в наше время. Визуальные эффекты и дизайн создают невероятное погружение в мир, где каждый элемент экрана продуман до мельчайших деталей, от песчаных червей до костюмов и архитектуры. "Дюна" Вильнёва – это не просто экранизация знаменитого произведения, это масштабное кинематографическое приключение, которое заново определяет возможности научно-фантастического жанра.', 'dune-cover.webp')
