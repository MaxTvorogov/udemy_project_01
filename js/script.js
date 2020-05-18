let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}
start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms () {
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

}
rememberMyFilms();


function detectMyPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы посмотрели cлишком мало фильмов');
    } else if (personalMovieDB.count >= 20 && personalMovieDB.count < 30) {
        console.log('Вы классный зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка...');
    }

}
detectMyPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres (){
    for (let i = 1; i < 4; i++){
        const a = prompt(`Ваш любимый жанр под номером ${i}`, ``);
        personalMovieDB.genres[i - 1] = a;
    }
}
writeYourGenres();