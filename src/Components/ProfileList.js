import React from 'react';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa'
import { PropTypes } from 'prop-types';

function ProfileList({ profile }) {
    return (
        <ul className="card-list">
            <li>
                <FaUser color='rgb(239, 115, 115)' size={22} />
                {profile.name}
            </li>
            {profile.location && (
                <li>
                    <FaCompass color='(144, 15, 255)' size={22} />
                    {profile.location}
                </li>
            )}
            {profile.company && (
                <li>
                    <FaBriefcase color='#795548' size={22} />
                    {profile.company}
                </li>
            )}
            <li>
                <FaUsers color='rgb(129, 195, 245)' size={22} />
                {profile.followers.toLocaleString()} followers
        </li>
            <li>
                <FaUsers color='rgb(64, 183, 95)' size={22} />
                {profile.following.toLocaleString()} following
        </li>
        </ul>
    )
}

ProfileList.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileList;