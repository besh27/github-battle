import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle, FaCode } from 'react-icons/fa';
import Card from './Card';
import ToolTip from './ToolTip';
import { ThemeConsumer } from './../contexts/theme';

function ReposGrid({ repos }) {
    return (
        <ul className="grid space-around">
            {repos.map((repo, index) => {
                const { name, owner, html_url, stargazers_count, forks, open_issues } = repo
                const { login, avatar_url } = owner

                return (
                    <ThemeConsumer>
                        {({ theme }) => (
                            <li key={html_url}> 
                                <Card
                                    header={`#${index + 1}`}
                                    avatar={avatar_url}
                                    href={html_url}
                                    name={login}
                                >
                                    <ul className='card-list'>
                                        <li>
                                            <ToolTip text="Username">
                                                <FaUser color="rgb(255, 191, 116)" size={22} />
                                                <a href={`https://github.com/${login}`}>
                                                    {login}
                                                </a>
                                            </ToolTip>
                                        </li>
                                        <li>
                                            <ToolTip text="Stars">
                                                <FaStar color="rgb(255, 215, 0)" size={22} />
                                                {stargazers_count.toLocaleString()} stars
                                            </ToolTip>
                                        </li>
                                        <li>
                                            <ToolTip text="Forks">
                                                <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                                                {forks.toLocaleString()} forks
                                            </ToolTip>
                                        </li>
                                        <li>
                                            <ToolTip text="Open Issues">
                                                <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
                                                {open_issues.toLocaleString()} open issues
                                            </ToolTip>
                                        </li>
                                    </ul>
                                </Card>
                            </li>
                        )}
                    </ThemeConsumer>
                )
            })}

        </ul>
    )
}
// ReposGrid.propType = {
//     repos: PropType.array.isRequired,
// }

export default ReposGrid;
