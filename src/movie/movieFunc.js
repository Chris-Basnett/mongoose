const Movie = require("./movieModel")

exports.createMovie = async (movieObject) =>{
    try{
        await Movie.create(movieObject)
    }catch (error){
        console.log(error)
    }
}

exports.readMovies = async (key, filter) =>{
    try{
        if (key){
            return await Movie.findOne({[key]: filter})
        }else{
            return await Movie.find({})
        }
    }catch (error){
        console.log(error)
    }
}

exports.updateMovie = async (movieObject) =>{
    try{
        await Movie.updateOne({title: movieObject.title}, {$set: {actor: movieObject.actor}})
    }catch (error){
        console.log(error)
    }
}

exports.deleteMovie = async (key, filter) =>{
    try{
        if (key){
            return await Movie.deleteOne({[key]: filter})
        }
    }catch (error){
        console.log(error)
    }
}