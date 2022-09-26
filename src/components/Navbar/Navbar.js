import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
                <h1>Ecomers</h1>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="index.js">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
                        <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link active bg-warning text-dark" aria-current="page" href="index.js">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active bg-warning text-dark" aria-current="page" href="index.js">Class</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active bg-warning text-dark" aria-current="page" href="index.js">Stock</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active bg-warning text-dark" aria-current="page" href="index.js">About Us</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
        </nav>
    )
}

export default Navbar