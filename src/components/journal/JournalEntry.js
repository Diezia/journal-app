import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg)',
                    backgroundSize: 'cover'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day start tomorrow
                </p>
                <p className="journal__entry-content">
                    lorem
                </p>
            </div>

            <div className="journal__date-entry-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
