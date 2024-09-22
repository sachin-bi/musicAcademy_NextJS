// import React from 'react'

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 text-center" >
                <div>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="#">Our Story</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Careers</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Blog</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="#">Courses</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Instructors</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Events</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Blog</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="#">Facebook</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Twitter</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Instagram</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <ul>
                        <li className="mb-2">
                            <a href="#">Email</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Phone</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Address</a>
                        </li>
                        <li className="mb-2">
                            <a href="#">Website</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <p className="text-center mt-8 text-sm p-8">© 2023 Music School. All rights reserved.</p>
        </footer>
    )
}

export default Footer
