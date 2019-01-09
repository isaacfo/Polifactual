// ========================================================
//                 HELPER FUNCTIONS 
// ========================================================

// ========================================================
//                      HEADER
// ========================================================
function header() {
    return `
        <div class= "header">
            <h1>Photo Widget</h1>
        </header>

    `;
}

// ========================================================
//                     LOGOUT BUTTON
// ========================================================
function logoutButton() {
    return `
    <div class=logout>

        <form action="/api/logout" method="POST">
        <input type="submit" value="Logout">
        </form>
    </div>
    `;
}

// ========================================================
//              LOGIN AND REGISTER BUTTONS 
// ========================================================
function loginOrRegister(){
    return `
    <div> 
        <a href="/login">Login</a>
        |
        <a href="/register">Register</a> 
    </div>
        `;
}

// ========================================================
//                      FOOTER 
// ========================================================
function footer() {
    return `
        <div class="footer">
            <p>
              &copy; 2018 Helen Harris
            </p>
        </footer>
    `;
}

module.exports = {
    header,
    footer, 
    logoutButton, 
    loginOrRegister
};