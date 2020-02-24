import React from 'react';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa'
import { PropTypes } from 'prop-types';
import ToolTip from './ToolTip';

function ProfileList({ profile }) {
    return (
        <ul className="card-list">
            <li>
            <ToolTip text="Username">
                <FaUser color='rgb(239, 115, 115)' size={22} />
                {profile.name}
                </ToolTip>
            </li>
            {profile.location && (
                <li>
                    <ToolTip text="User's Location">
                        <FaCompass color='(144, 15, 255)' size={22} />
                        {profile.location}
                    </ToolTip>
                </li>
            )}
            {profile.company && (
                <li>
                    <ToolTip text="User's Company">
                        <FaBriefcase color='#795548' size={22} />
                        {profile.company}
                    </ToolTip>
                </li>
            )}
            <li>
                <ToolTip text="Followers">
                    <FaUsers color='rgb(129, 195, 245)' size={22} />
                    {profile.followers.toLocaleString()} followers
                </ToolTip>
            </li>
            <li>
                <ToolTip text="Following">
                    <FaUsers color='rgb(64, 183, 95)' size={22} />
                    {profile.following.toLocaleString()} following
                </ToolTip>
            </li>
        </ul>
    )
}

ProfileList.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileList;