# Overview

This is an app that lets you save your password along with the name you want to give and the username/website.

The purpose of this program is to make password management easier for people. In the era where everybody uses the internet and most of their information is there, we all need passwords and usernames to be safe but a lot of those times we create difficult passwords and we don't remember. This is just a demo. There is no user authentication and I added routes for patch/put and I may implement it in the future to be able to edit each entry.

[Software Demo Video](https://youtu.be/NYecYu_wNsI)

# Relational Database

I'm using PostgreSQL

The way the passwords are saved is by using basic CRUD operations. You can create, delete, and read a password. The feature to edit is implemented in the password.js file but the UI is not there yet.

# Development Environment

Tools I used are PostgreSQL, Render, NodeJS, Express

Languages I used are JavaScript, React, CSS, JSX.

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [Claude](https://claude.ai)
- [DBeaver](https://dbeaver.com/)
- [PostgreSQL](https://www.postgresql.org/)

# Future Work

The following will be implemented next:

- I will add the edit feature to each password
- I will create an authentication feature so everybody's info is attached to a personal account and not public
- I will add more security by implementing hash practices or JWT

# Run the project

You can either run it locally with npm install and then npm run dev or visit the following link:
[Software Demo Video](https://passwordmanager-1-j7kx.onrender.com/)
