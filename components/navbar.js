import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar = (props)=>{

  const {darkmode} = props;
  const router = useRouter();
  const {pathname} = router;

  // console.log(router);


    return ( <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{'background-color':'#8e44ad'}}>
                    <div className="container">
                      <a className="navbar-brand" href="#">Start Bootstrap</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                          <li className={`nav-item ${pathname==='/'?'active':''}`}>
                          <Link href="/">
                              <a className="nav-link" style={{color:pathname==='/'?'white':'black'}}>Home
                              <span className="sr-only">(current)</span>
                            </a>
                          </Link>
                          </li>
                          <li className={`nav-item ${pathname==='/about'?'active':''}`}>
                          <Link href="/about">
                            <a className="nav-link" style={{color:pathname==='/about'?'white':'black'}} >About</a>
                            </Link>
                          </li>
                          <li className={`nav-item ${pathname==='/services'?'active':''}`}>
                          <Link href="/services">
                            <a className="nav-link" style={{color:pathname==='/services'?'white':'black'}}>Services</a>
                            </Link>
                          </li>
                          <li className={`nav-item ${pathname==='/contact'?'active':''}` }>
                          <Link href="/contact">
                            <a className="nav-link" style={{color:pathname==='/contact'?'white':'black'}}>Contact</a>
                            </Link>
                          </li>
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>
                              Theme Options
                               </a>
                           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" role="button" onClick={darkmode.disable} href="#">Light Mode</a>
                            <a className="dropdown-item" role="button" onClick={darkmode.enable} href="#">Dark Mode</a>
                          <div className="dropdown-divider"></div>
                         <a className="dropdown-item" role="button" onClick={darkmode.toggle} href="#">Switch Theme</a>
                          </div>
                          </li>
                        </ul>
                      </div>
                    </div>
  </nav>);
};




export default Navbar;