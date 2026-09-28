import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// =========================
// Firebase Configuration
// =========================

const firebaseConfig = {
    apiKey: "AIzaSyD1JQA8nB0tvSzzTrKwHYTSkBwejtw4IIo",
    authDomain: "the-world-of-flavors.firebaseapp.com",
    projectId: "the-world-of-flavors",
    storageBucket: "the-world-of-flavors.firebasestorage.app",
    messagingSenderId: "860294903887",
    appId: "1:860294903887:web:a7cc0240b101acda75923a",
    measurementId: "G-1VG78BJ9RS"
};


// =========================
// Initialize Firebase
// =========================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


// =========================
// HTML Elements
// =========================

const menu = document.getElementById("menu");

const loginBtn = document.getElementById("loginBtn");

const logoutBtn = document.getElementById("logoutBtn");

const loginStatus = document.getElementById("loginStatus");


// =========================
// Google Login
// =========================

loginBtn.addEventListener("click", async () => {

    try {

        loginBtn.disabled = true;

        loginStatus.textContent = "Connecting to Google...";

        const result = await signInWithPopup(
            auth,
            provider
        );

        const user = result.user;

        console.log("Login successful!");
        console.log("Name:", user.displayName);
        console.log("Email:", user.email);

        // Login สำเร็จ → เข้าเกมทันที
        window.location.href = "/index.html";

    } catch (error) {

        console.error("Login error:", error);

        loginBtn.disabled = false;

        if (error.code === "auth/popup-closed-by-user") {

            loginStatus.textContent = "Login cancelled.";

        } else if (error.code === "auth/popup-blocked") {

            loginStatus.textContent =
                "Popup was blocked. Please allow popups.";

        } else if (error.code === "auth/unauthorized-domain") {

            loginStatus.textContent =
                "This domain is not authorized in Firebase.";

        } else if (error.code === "auth/network-request-failed") {

            loginStatus.textContent =
                "Network error. Please check your internet.";

        } else {

            loginStatus.textContent =
                "Login failed. Please try again.";

        }
    }
});


// =========================
// Logout
// =========================

logoutBtn.addEventListener("click", async () => {

    try {

        await signOut(auth);

        console.log("User logged out.");

        loginStatus.textContent = "Logged out.";

    }

    catch (error) {

        console.error("Logout error:", error);

        loginStatus.textContent =
            "Logout failed.";

    }

});


// =========================
// Check Login State
// =========================

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("User is logged in.");

        console.log("Name:", user.displayName);

        console.log("Email:", user.email);

        loginBtn.style.display = "none";

        logoutBtn.style.display = "block";

        loginStatus.textContent =
            `Welcome ${user.displayName || "Player"}!`;

    }

    else {

        console.log("No user logged in.");

        loginBtn.style.display = "flex";

        loginBtn.disabled = false;

        logoutBtn.style.display = "none";

        loginStatus.textContent = "";

    }

});