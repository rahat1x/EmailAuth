import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
    const [error, setError] = useState('')
    const {currentUser} = useAuth()
    const handlelogout = () => {
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-2'>Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <strong>Email : </strong>{currentUser.email}

                    <Link to="/update-profile" className='btn btn-primary w-100 mt-3'>Update Profile</Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handlelogout}>Logout</Button>
            </div>
        </>
    )
}

export default Dashboard