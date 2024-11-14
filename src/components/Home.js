

function Home() {

    return ( 
        <div className="home-container">
            <p>
                Features: 
                <ul>
                    <li>Login</li>
                    <li>Logout</li>
                    <li>Add user</li>
                    <li>Update user</li>
                    <li>Delete user</li>
                    <li>Display list users</li>
                    <li>Search by Email</li>
                    <li>Sort by firstname</li>
                    <li>Export list users to file .csv</li>
                    <li>Responsive</li>
                </ul>
                Firstly, you must login to use features of website with email <b>eve.holt@reqres.in</b> and password is random <br/>
            </p>
        </div>
    );
}

export default Home;