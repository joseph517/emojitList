import { useState } from "react"

export function SearchEmoji({ valorInput, onInputChange }) {
    return (
        <div className="row d-flex justify-content-end">
            <div className="col-6">
                <div className="my-3">
                    <input
                        value={valorInput}
                        onChange={onInputChange}
                        type='text'
                        className="form-control"
                        placeholder="Search emoji"
                    />
                </div>
            </div>
        </div>
    )
}