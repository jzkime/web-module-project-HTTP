import React from 'react';
import { useHistory } from 'react-router-dom';

const DeleteMovieModal = ({deleteMov, movie, setDeleteMov, deleteMovie}) => {
    const { push } = useHistory();

    const deleteModal = (e) => {
        e.preventDefault()
        push('/movies')
        deleteMovie(movie.id)
    }

    const handleCancel = () => {
        setDeleteMov(false);
    }

    return (<div id="deleteEmployeeModal" className={deleteMov ? 'active' : ''}>
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={deleteModal}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete {movie.title}?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" onClick={handleCancel}/>
                        <input type="submit" className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;