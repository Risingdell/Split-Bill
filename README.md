# 🍽️ Eat-n-Split - A Bill Splitting App

A React project developed to track and manage the  total spent by the group by tracking who paid and who has borrowed money

## Features

-Add friends: into the group with custom avator,currently using  "https://i.pravatar.cc/48" for random images genaration.

-Split the bill: with the  friends ,keeeping track of whos paid and whos borrowed money and yet to pay.

-Track Balance:keep track of the members whos paid and who yet to pay the user on the bill spent by the user in place of the members.

-Color-code:useds a simple ui with hybrid flex and grid layout  cards.

-Responsiveness- works on mobile and desktop window.



##  Quick Start

### Installation
bash
# Install dependencies
npm install

# Start development server
npm start


### Usage
1. Add a Friend: Click "Add Friend" button, enter name and image URL
2. Select Friend: Click "Select" button next to a friend
3. Split Bill: Enter total bill amount and your portion
4. **Done**: Friend's balance updates automatically

##  Documentation

### For Learning
(1) Used useState hooks and  obtained a  more clear view on the hooks(syyntax and advance uage in props drilling).

(2) Toggle effect from "show and setShow "
At default the add  freind card is hidden and on click the stae is reverted to show the  card.

(3)Add  the freind on the form submit in to the existing array as an element.


(4) Selecting each individual for the share splitting.

(5)
const [bill, setBill] = useState("");
const [paidByUser, setPaidByUser] = useState("");
const [whospaying, setWhosPaying] = useState("user");

These states are used to calculate the total, paid by the user or friend and the splitting based on borrow or owe action.

(6) Prop drilling :like passing function or state from the on component to other to avoid hydration error.
-

- **[IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)** - How the code works & how to extend it

### For Development
- **[CLAUDE.md](CLAUDE.md)** - Project architecture & guidelines
- **[BUGS_FIXED.md](BUGS_FIXED.md)** - Issues found and fixed

## 🎓 React Concepts Applied

| Concept | Purpose | Example |
|---------|---------|---------|
| **useState** | State management | Friends list, selected friend |
| **Props** | Component communication | Passing handlers and data |
| **Props Drilling** | Passing props through levels | App → List → Individual items |
| **Controlled Components** | Form state sync | Name and image inputs |
| **Conditional Rendering** | Show/hide elements | Forms, balance display |
| **Array Methods** | Data manipulation | map, filter, find |
| **Event Handling** | User interactions | Button clicks, form submissions |
| **Immutable Updates** | State consistency | Using spread operator and map |

**See [CONCEPTS.md](CONCEPTS.md) for detailed explanations.**

## 🛠️ Available Scripts

```bash
npm start      # Runs the app in development mode
npm build      # Builds the app for production
npm test       # Runs the test suite
npm eject      # Ejects from Create React App (one-way!)
```

## 📝 Code Quality

### Standards Followed
- ✅ Functional components (React hooks)
- ✅ Immutable state updates
- ✅ Controlled form inputs
- ✅ Proper event handling
- ✅ Clean code style
- ✅ Consistent naming conventions

## 🐛 Known Issues Fixed

See [BUGS_FIXED.md](BUGS_FIXED.md) for details on:
- ✅ UUID generation fix
- ✅ Strict equality (`===` instead of `==`)
- ✅ Form reset after submission
- ✅ Removed debug console logs

#

Made with ❤️ while learning React-concepts.

