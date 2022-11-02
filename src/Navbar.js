const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Dimal's blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadias:'8px'
                }}>Create New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;
