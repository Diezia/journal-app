import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="Note description"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__image">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IVc0KMPP2qz31qeH8X7lO-wZ8M_-8Fpmvw&usqp=CAU"
                        alt="img"
                    />
                </div>
            </div>
        </div>
    )
}
