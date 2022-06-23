import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    genre: '',
    description: '' 
}

const AddMovieForm = (props) => {
    const [ movie, setMovie ] = useState(initialMovie);
    const { push } = useHistory();

    const handleChanges = (e) => {
        let value = e.target.value;
        if(e.target.name === 'metascore') value = parseInt(value);
        setMovie({...movie, [e.target.name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/movies', movie)
            .then(res => {
                props.setMovies(res.data);
                setMovie(initialMovie);
                push('/movies')
            })
    }

    return(
        <div className='col'>
            <div className='modal-content'>
                <form onSubmit={handleSubmit}>
                    <div className='modal-header'>
                        <h4 className='modal-title'>Add Movie</h4>
                    </div>
                    <div className='modal-body'>
                        <div className='form-group'>
                            <label> Title
                                <input type='text' value={movie.title} name='title' className="form-control" onChange={handleChanges} />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label>Director</label>
                                <input type='text' value={movie.director} name='director' className="form-control" onChange={handleChanges}/>
                            
                        </div>
                        <div className='form-group'>
                            <label>Metascore</label>
                                <input type='text' value={movie.metascore} name='metascore' className="form-control" onChange={handleChanges}/>
                        </div>
                        <div className='form-group'>
                            <label>Genre</label>
                                <input type='text' value={movie.genre} name='genre' className="form-control" onChange={handleChanges} />
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                                <input type='text' value={movie.description} name='description' className="form-control" onChange={handleChanges} />
                        </div>
                        <div className='modal-footer'>
                                <input type='submit' className="btn btn-info" value='add' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMovieForm;
