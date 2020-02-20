import React from 'react'

function ReposGrid ({ repos }){
    return (
        <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>
    )
}

export default ReposGrid;