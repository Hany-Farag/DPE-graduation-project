import './style.css'
const Header=()=>{
    return(
        <header>
           <a href='/' class="logo_items"><img src="../header_imgs/logo.jpg" alt="logo" /></a>
           <span class="logo_items">
            Minimal <span class="colored_head">Shop</span>ping
           </span>

           <img src="../header_imgs/Vector.svg" alt="account_img"  class="to_right" />
        </header>
    );
};
export default Header;