
// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-8">FIR Management System</h1>

            <div className="space-y-6 my-4">
                <div className="bg-blue-100 p-4 rounded shadow-md">
                    <h2 className="text-xl font-medium">Assign Role</h2>
                    <p className="text-gray-700">Admin can assign new role.</p>
                    <Link
                        to="/assign-role"
                        className="inline-block mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                       Assign New Role
                    </Link>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-blue-100 p-4 rounded shadow-md">
                    <h2 className="text-xl font-medium">Create a New FIR</h2>
                    <p className="text-gray-700">Submit a new FIR to begin the process.</p>
                    <Link
                        to="/new-fir"
                        className="inline-block mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Go to Create FIR
                    </Link>
                </div>

                <div className="bg-blue-100 p-4 rounded shadow-md">
                    <h2 className="text-xl font-medium">View FIR Status</h2>
                    <p className="text-gray-700">user can view all the FIRs and track its status</p>
                    <Link
                        to="/view-fir"
                        className="inline-block mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Go to View FIRs
                    </Link>
                </div>

                <div className="bg-blue-100 p-4 rounded shadow-md">
                    <h2 className="text-xl font-medium">View All FIRs</h2>
                    <p className="text-gray-700">Police can view all the FIRs and can approve</p>
                    <Link
                        to="/view-all-fir-police"
                        className="inline-block mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Go to View all FIRs
                    </Link>
                </div>

                <div className="bg-blue-100 p-4 rounded shadow-md">
                    <h2 className="text-xl font-medium">Investigate FIRs</h2>
                    <p className="text-gray-700">Update the status of an existing FIR.</p>
                    <Link
                        to="/investigate-fir"
                        className="inline-block mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Go to Investigate
                    </Link>
                </div>

                <div className="bg-blue-100 p-4 rounded shadow-md">
                    <h2 className="text-xl font-medium">Close an FIR</h2>
                    <p className="text-gray-700">Close an FIR once it's been investigated and reviewed.</p>
                    <Link
                        to="/close-fir"
                        className="inline-block mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Go to Close FIR
                    </Link>
                </div>
            </div>
        </div>
    );
};

