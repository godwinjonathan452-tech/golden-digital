// GOLDEN DIGITAL — ACCOUNT SYSTEM
// Supabase Authentication

const SUPABASE_URL = "https://yatmnmezaejsluwqokst.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_5P1He8_BlcIi_MzL7UtGkg_SByifrc7_KEY_HERE";

const { createClient } = supabase;

const goldenSupabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// Registration
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const country = document.getElementById("country").value.trim();
        const password = document.getElementById("signupPassword").value;

        const message = document.getElementById("authMessage");

        message.textContent = "Creating your GOLDEN DIGITAL account...";

        const { data, error } = await goldenSupabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                    username,
                    phone,
                    country,
                    preferred_language: "English"
                }
            }
        });

        if (error) {
            message.textContent = error.message;
            return;
        }

        message.textContent = data.session
            ? "Account created successfully! Welcome to GOLDEN DIGITAL."
            : "Registration successful! Check your email to confirm your account.";
    });
}

// Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("authMessage");

        message.textContent = "Signing in...";

        const { error } = await goldenSupabase.auth.signInWithPassword({
            email,
            password
        });

        message.textContent = error
            ? error.message
            : "Welcome back to GOLDEN DIGITAL!";
    });
}

// Logout
async function goldenLogout() {
    const { error } = await goldenSupabase.auth.signOut();

    if (error) {
        alert(error.message);
        return;
    }

    window.location.reload();
}

// Check current account
goldenSupabase.auth.onAuthStateChange((event, session) => {
    console.log("GOLDEN DIGITAL authentication:", event);

    if (session) {
        console.log("Logged in:", session.user.email);
    }
});
