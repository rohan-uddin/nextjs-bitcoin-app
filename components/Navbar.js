import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <a className="navbar-brand">(₿)</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
        </li>
        <li className="nav-item">
          <Link href="/about"><a className="nav-link">About</a></Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;