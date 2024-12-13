import { Link } from "react-router-dom";

export default function Page() {
    return <>
        <section className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-6 p-8 bg-white rounded-xl shadow-lg">
                <h1 className="text-8xl font-bold text-red-500">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
                <p className="text-gray-600 max-w-md">The page you are looking for doesn&#39;t exist or has been moved.</p>
                <Link to="/" replace className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                    Return Home
                </Link>
            </div>
        </section>
    </>;
}