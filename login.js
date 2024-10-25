//-----------------------ANIMATIONS------------------------------
gsap.from(".container", {
    y: 500,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "back.out",
})
gsap.from(".outer-container", {
    opacity: 0,
    duration: 0.9,
    delay: 0.3,
});

//-------------------------------------------------------------------------
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');
// Show registration form when Sign Up button is clicked
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});








// Show login form when Sign In button is clicked
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Form submission for sign-up

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    if (name && email && password) {
        alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
        const user={
            'email': email,
            'password':password
        }
        const existingUsers=JSON.parse(localStorage.getItem("users")) || []
        existingUsers.push(user)
        localStorage.setItem("users",JSON.stringify(existingUsers))
        signUpForm.reset()
        
        
        
    } else {
        alert("Please fill in all fields!");
    }
});

// Form submission for sign-in
signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    if (email && password) {
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        let alreadyauser = false
        storedUsers.forEach(userObj => {
            if(email == userObj.email){
                alreadyauser=true
                alert(`Sign In Successful!\nEmail: ${email}`);
            }
        });
        if(alreadyauser==false){
            alert(`Sign In Failed! Please Register First`);
            container.classList.add("active");
        }
        signInForm.reset(); // Reset the form fields
    } else {
        alert("Please fill in all fields!");
    }
});