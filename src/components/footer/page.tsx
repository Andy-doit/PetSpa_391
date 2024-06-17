export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white">
                <div className="mx-auto w-full max-w-screen-xl p-4">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <span className="self-center text-2xl font-mono whitespace-nowrap">
                                GitHub
                            </span>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-600 lg:my-8" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Product</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Features
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Security
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Business
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Case studies
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Pricing
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Explore</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Developer
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        AI
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Partners
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Atom
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Electron
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        GitHub Desktop
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Support</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Help
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Community
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Forum
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Training
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Status
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Contact GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        About
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Careers
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Press
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Shop
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-600 lg:my-8" />
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">
                            &copy; GitHub Inc. © 2023
                        </span>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >

                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >

                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >

                                </svg>
                                <span className="sr-only">LinkedIn page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}