import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 dark:bg-white dark:text-black">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
                    <div className="mb-8 lg:mb-0">
                        <Link href="/" className="text-3xl font-bold text-lime-400 dark:text-lime-600">
                            DEVLOP.ME
                        </Link>
                    </div>
                    <div className="text-4xl md:text-6xl font-light text-white dark:text-black">As you can</div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Say Hello Section */}
                    <div>
                        <h3 className="text-white/60 dark:text-black/60 text-sm font-medium mb-6 uppercase tracking-wider">Say hello</h3>
                        <div className="space-y-3">
                            <a
                                href="mailto:HELLO@DEVLOP.ME.COM"
                                className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm"
                            >
                                HELLO@DEVLOP.ME.COM
                            </a>
                            <a
                                href="mailto:MAHBUBUL@ME.COM"
                                className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm"
                            >
                                MAHBUBUL@ME.COM
                            </a>
                        </div>
                    </div>

                    {/* Call Section */}
                    <div>
                        <h3 className="text-white/60 dark:text-black/60 text-sm font-medium mb-6 uppercase tracking-wider">Call</h3>
                        <div className="space-y-3">
                            <a href="tel:+78454949810" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm">
                                +784549 4981 00
                            </a>
                            <a href="tel:+88450100211" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm">
                                +8845 0100 211
                            </a>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div>
                        <h3 className="text-white/60 dark:text-black/60 text-sm font-medium mb-6 uppercase tracking-wider">Menu</h3>
                        <div className="space-y-3">
                            <Link href="/" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                HOME
                            </Link>
                            <Link href="/about" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                ABOUT
                            </Link>
                            <Link href="/portfolio" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                PORTFOLIO
                            </Link>
                            <Link href="/blog" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                BLOG
                            </Link>
                        </div>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h3 className="text-white/60 dark:text-black/60 text-sm font-medium mb-6 uppercase tracking-wider">Social</h3>
                        <div className="space-y-3">
                            <a href="#" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                TWITTER
                            </a>
                            <a href="#" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                INSTAGRAM
                            </a>
                            <a href="#" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                FACEBOOK
                            </a>
                            <a href="#" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                BEHANCE
                            </a>
                            <a href="#" className="block text-white hover:text-lime-400 dark:text-black dark:hover:text-lime-600 transition-colors text-sm uppercase">
                                DRIBBBLE
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-white/10 dark:border-black/10">
                    <div className="mb-4 lg:mb-0">
                        <span className="text-white font-bold text-lg dark:text-black">BESNIK</span>
                    </div>

                    <div className="mb-4 lg:mb-0">
                        <span className="text-white/60 dark:text-black/60 text-sm">© devlop.me 2022</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="text-white/60 dark:text-black/60 hover:text-white dark:hover:text-black transition-colors text-sm uppercase">
                            PRIVACY
                        </Link>
                        <span className="text-white/40 dark:text-black/40">-</span>
                        <Link href="/terms" className="text-white/60 dark:text-black/60 hover:text-white dark:hover:text-black transition-colors text-sm uppercase">
                            TERMS
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
