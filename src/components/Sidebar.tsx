export default () => {
    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
                <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="icon-[bx--pie-chart] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                <span className="ml-3">Overview</span>
                            </a>
                        </li>
                        <li>
                            <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                                <span className="icon-[bx--file-blank] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                                <span className="icon-[bx--chevron-down] w-6 h-6 cursor-pointer" />
                            </button>
                            <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                                <span className="icon-[bx--shopping-bag] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                                <span className="icon-[bx--chevron-down] w-6 h-6 cursor-pointer" />
                            </button>
                            <ul id="dropdown-sales" className="hidden py-2 space-y-2">
                                    <li>
                                        <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                                    </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="icon-[bx--message-square-detail] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
                                <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                                    6   
                                </span>
                            </a>
                        </li>
                        <li>
                            <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                                <span className="icon-[bx--lock] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                                <span className="icon-[bx--chevron-down] w-6 h-6 cursor-pointer" />
                            </button>
                            <ul id="dropdown-authentication" className="hidden py-2 space-y-2">
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="icon-[bx--detail] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                <span className="ml-3">Docs</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="icon-[bx--collection] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                <span className="ml-3">Components</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="icon-[bx--help-circle] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                <span className="ml-3">FAQs & Help</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* footer */}
                {/* hidden */}
                <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
                    <a href="#" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                        <span className="icon-[bxs--dashboard] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                    </a>
                    <a href="#" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <span className="icon-[bxs--cog] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                    </a>
                    <div id="tooltip-settings" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                        Settings page
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    {/* <!-- Dropdown --> */}
                    {/* <button type="button" data-dropdown-toggle="language-dropdown" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>
                    </button> */}
                    {/* a list when supposed to popup when the button is pressed */}
                    <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="language-dropdown">
                        <ul className="py-1" role="none">
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                            <div className="inline-flex items-center">
                            <span className="icon-[bx--help-circle] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />             
                                English (US)
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                <div className="inline-flex items-center">
                                <span className="icon-[bx--help-circle] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                    Deutsch
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                            <div className="inline-flex items-center"> 
                                <span className="icon-[bx--help-circle] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />          
                                Italiano
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600" role="menuitem">
                                <div className="inline-flex items-center">
                                    <span className="icon-[bx--help-circle] w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer" />
                                    Hmm
                                </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}
