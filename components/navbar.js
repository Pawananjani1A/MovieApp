import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar = ()=>{

  const router = useRouter();
  const {pathname} = router;

  // console.log(router);


    return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                      <a className="navbar-brand" href="#">Start Bootstrap</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                          <li className={`nav-item ${pathname==='/'?'active':''}`}>
                          <Link href="/">
                              <a className="nav-link" >Home
                              <span className="sr-only">(current)</span>
                            </a>
                          </Link>
                          </li>
                          <li className={`nav-item ${pathname==='/about'?'active':''}`}>
                          <Link href="/about">
                            <a className="nav-link" >About</a>
                            </Link>
                          </li>
                          <li className={`nav-item ${pathname==='/services'?'active':''}`}>
                          <Link href="/services">
                            <a className="nav-link">Services</a>
                            </Link>
                          </li>
                          <li className={`nav-item ${pathname==='/contact'?'active':''}`}>
                          <Link href="/contact">
                            <a className="nav-link" >Contact</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
  </nav>);
};




export default Navbar;