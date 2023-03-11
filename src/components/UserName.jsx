import React from 'react';

export default function User({ className, firstName, lastName }) {
    return (
        <>
            <h1 className={className}>{firstName} {lastName}</h1>
        </>
    );
}
