import React from 'react'
import './style.css'

export const FixedButton = ({ hrefId }) => {
    return (
        <div>
            <button
                type="button"
                class="btn btn-primary launching-btn"
                data-bs-toggle="modal"
                data-bs-target="#termsConditionModal"
            >
                <a href={hrefId}> Launching Soon!</a>
            </button>
        </div>
    )
}
