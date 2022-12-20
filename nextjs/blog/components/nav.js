import Link from 'next/link'

export default function Nav() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        {/* <a id="link" className='link-item'>Home</a> */}
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        {/* <a id="link"  className='link-item'>About</a> */}
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        {/* <a id="link" >Blog</a> */}
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}