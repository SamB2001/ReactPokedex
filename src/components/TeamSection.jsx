
import React from 'react'

const TeamSection = ({team}) => {
    
    let display = team.map((pokemon, index) => {
        return <h3>{pokemon.name}</h3>
    })

    return (
        <section className='team-section'>
            <h2>my team</h2>
            <div className='team-container'>
                {display}
            </div>
        </section>
    )
}

export default TeamSection