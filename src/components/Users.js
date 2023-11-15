import React, { useEffect } from 'react';
import fetchUsers from '../redux/users/usersAction';
import { connect } from 'react-redux';


const Users = ({ loading, users, errorMessage, fetchUsers }) => {

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h2>Loading ...</h2>
    }
    if (errorMessage) {
        return <h2>Error: {errorMessage}</h2>
    }

    return (
        <>
            <ul>
                {users.map(user => (
                    <li>{user.title}</li>
                ))}
            </ul>
        </>
    );
}

const mapStateToProps = state => (
    {
        loading: state.loading,
        users: state.users,
        errorMessage: state.errorMessage,


    }
);

export default connect(mapStateToProps, { fetchUsers })(Users);