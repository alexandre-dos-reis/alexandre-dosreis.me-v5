import { NextPage } from 'next'
import DropDownMenu from './DropDownMenu'
import styles from './Navbar.module.scss'
import NavbarElements from './_NavbarElements'
import NavbarSocial from './_NavbarSocial'
import adminLinks from './linksAdmin.json'
import publicLinks from './linksPublic.json'
import Link from 'components/Link/Link'
import { Category } from 'types/Category.type'

interface NavbarProps {
    mode: 'public' | 'admin' | 'empty'
    categories: Category[]
}

const Navbar: NextPage<NavbarProps> = ({ mode, categories }) => {
    return (
        <>
            <div className={styles.spacer}></div>
            <nav className={styles.navbar}>
                {mode === 'public' && (
                    <>
                        <div className={styles.creatorName}>
                            <Link href="/">
                                Alexandre&nbsp;Dos&nbsp;Reis
                                {/* <br /> */}
                            </Link>
                        </div>
                        <ul className={styles.publicNavbarLinks}>
                            <li>
                                <Link href="/">
                                    <svg
                                        className={styles.homeSVG}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <DropDownMenu title="Articles" categories={categories}/>
                            </li>
                            <NavbarElements
                                className={styles.publicNavbarLinks}
                                links={publicLinks}
                            />
                        </ul>

                        <NavbarSocial className={styles.socialNav} />
                    </>
                )}

                {mode === 'admin' && (
                    <NavbarElements
                        className={styles.adminNavbarLinks}
                        links={adminLinks}
                    />
                )}
            </nav>
        </>
    )
}

export default Navbar
