1. Project setup
Agree project idea (shop type, products, roles)
Set weekly meeting schedule + meeting minutes template

2. Base structure (must match notes exactly)
Create client (React) and server (Node/Express) folders
Match file structure from lecturer examples exactly
Set up MongoDB (localhost)
Install required dependencies only (no CSS/HTML libraries)

3. Backend (Node / Express / MongoDB)
Set up Express server
Create routers for:
auth
products
users
orders / purchases
Create MongoDB models with validation:
User
Product
Order / Purchase

Implement middleware:
auth (JWT)
role-based access (admin / customer / guest)
error handling
Password encryption (bcrypt)
JWT auth with .pem private key
Router validation
MongoDB model validation

5. Authentication & access levels
Guest access (browse + purchase)
Customer:
register
login
stay logged in (JWT)
Admin:
login
protected routes
Protect routes based on role

6. Frontend base (React)
Set up React with <BrowserRouter>
Functional components only
Global layout:
header
nav
footer
Responsive navigation:
hamburger menu (mobile)
horizontal menu (tablet/desktop)

6. Styling & UX (very important)
Create your own CSS from scratch
Define:
colour palette
typography
spacing rules
Ensure consistent look across all pages
Responsive layouts:
mobile < 600px
tablet 600–768px
desktop > 768px

8. Product browsing (all users)
Product list page
Product cards (mobile)
Product tables (tablet + desktop)
less data on tablet rows
more data on desktop rows
Filter products
Search products
Sort products
Ensure filter + search + sort work together
Product modal:
show full product details
multiple images

8. Product images
Allow multiple images per product
Display images differently per device
Preview images when adding/editing products

10. Shopping cart & checkout
Shopping cart (guest + customer)
Update quantities
Remove items
Payments implementation
Save order to database
Guest checkout:
name
address
phone
email
Professional error handling UI

10. Customer features
Create user profile
profile image
Edit user profile
View purchase history dashboard
images shown
filter / search / sort
Return products
Professional error handling UI everywhere

12. Admin dashboard
Products dashboard:
create product
edit product
delete product (confirmation modal)
change stock levels
filter / search / sort
Customers dashboard:
view customers
delete customer
filter / search / sort
Purchase history dashboard:
view all purchases
filter / search / sort
Professional error handling UI on all dashboards

12. Validation & error handling
Client-side form validation
Clear error messages (what + where)
Consistent error UI
Backend validation errors handled cleanly

14. Testing & polish
Test all roles (guest / customer / admin)
Test responsiveness on all breakpoints
Test auth persistence (refresh browser)
Check no forbidden libraries used
Check file structure matches notes
Make sure everyone understands the code

14. Final submission
Screencast recording
Zip project (code + screencast)
Each member uploads to Moodle
Prepare for grading interview
