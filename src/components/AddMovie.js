import classes from './AddMovie.module.css'

const AddMovie=props=>{
    const onAddMovieHandler=event=>{
        event.preventDefault();
        const NewMovieObj={
            title:event.target.title.value,
            opening:event.target.opening.value,
            date:event.target.Date.value
        }
        console.log(NewMovieObj)
    }

    return(
        <section className={`${classes.section} ${classes.input}`}>
            <form onSubmit={onAddMovieHandler}>
                <label htmlFor="title" >Title</label>
                <input id="title" type="text" name='title'/>
                <label htmlFor="opening" >Opening Text</label>
                <input id="opening" type="text" name="opening"/>
                <label htmlFor="Date">Release Date</label>
                <input id="Date" type='text' name="Date"/>
                <button type='submit'>Add Movie</button>
            </form>
        </section>
    )
}

export default AddMovie;