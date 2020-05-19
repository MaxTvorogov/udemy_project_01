const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,

        start: function () {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }

        },

        rememberMyFilms: function () {
            for (let i = 0; i < 2; i++) {
                const a = prompt('Один из последних просмотренных фильмов', '');
                const b = prompt('Оцените его', '');

                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('Done!');
                } else {
                    console.log('Error');
                    i--;
                }
            }

        },

        detectMyPersonalLevel: function () {
            if (personalMovieDB.count < 10) {
                console.log('Вы посмотрели cлишком мало фильмов');
            } else if (personalMovieDB.count >= 20 && personalMovieDB.count < 30) {
                console.log('Вы классный зритель!');
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка...');
            }

        },

        showMyDB: function (hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },

        toggleVisibleMyDB: function () {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },

        writeYourGenres: function () {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`, ``);
            
                if (genre === '' || genre == null) {
                    console.log('Вы ввели не корректные данные или оставили строку пустой');
                    i--;
            } else{
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} -это ${item}`);
        });
    }
};
   