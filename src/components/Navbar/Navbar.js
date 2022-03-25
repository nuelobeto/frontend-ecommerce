import React, { useContext, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "./../../context/GlobalState";

function Navbar() {
  const { cart, searchProducts, user, getUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [isSearching, setIsSearching] = useState(false);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      return;
    } else {
      searchProducts(text);

      navigate("searchpage");
    }
  };

  const totalItems = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };

  const handleLogout = () => {
    getUser(null);
    navigate("/");
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          {!isSearching ? (
            <>
              <Link to="/">
                <h1 className="logo">E-SHOP</h1>
              </Link>

              <form className="search" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">
                  <SearchIcon />
                </button>
              </form>

              <ul>
                <li>
                  <button
                    onClick={() => setIsSearching(true)}
                    className="search-icon"
                  >
                    <SearchIcon />
                  </button>
                </li>
                <li>
                  <Link className="cart-icon" to="cart">
                    <ShoppingCartIcon />
                    <span>{totalItems()}</span>
                  </Link>
                </li>
                <li>
                  {user ? (
                    <div className="user">
                      <p>{user.name}</p>
                      <button className="logout-btn" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link className="login-btn" to="authpage">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </>
          ) : (
            <>
              <form className="mobile-search" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">
                  <SearchIcon />
                </button>
              </form>
              <span
                className="cancel-search"
                onClick={() => setIsSearching(false)}
              >
                +
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
