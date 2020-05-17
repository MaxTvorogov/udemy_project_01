const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов','');
    const b = prompt('Оцените его','');

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error');
        i--;
    }
}

if(personalMovieDB.count < 10){
    console.log('Вы посмотрели cлишком мало фильмов');
} else if (personalMovieDB.count >= 20 && personalMovieDB.count < 30) {
    console.log('Вы классный зритель!');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка...');
}



console.log(personalMovieDB);
