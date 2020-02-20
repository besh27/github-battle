import React from 'react';
import PropTypes from 'prop-types';

function LanguageNav({ selected, onUpdateLanguage }) {
    const languages = ['All', 'JavScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='flex-center'>
            {languages.map((language, index) => (
                <li key={index}>
                    <button
                        className="btn-clear nav-link"
                        style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
                        onClick={() => onUpdateLanguage(language)}
                    >
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

LanguageNav.propTypes = {
    selected: PropTypes.string.isRequired, 
    onUpdateLanguage: PropTypes.func.isRequired
}

export default LanguageNav;

