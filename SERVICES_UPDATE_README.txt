N2X Services Premium Update

Files added:
- src/pages/ServicesPage.jsx
- src/pages/ServicesPage.css

Files updated:
- src/App.jsx: added /services route
- src/components/Navbar/Navbar.jsx: Services and View All Services now open /services

How to run:
1) Extract this ZIP.
2) Open terminal in N2X folder.
3) Run: npm install
4) Run: npm run dev
5) Open: http://localhost:5173/services

Note:
If npm install gives registry/network error, run:
npm config set registry https://registry.npmjs.org/
npm cache clean --force
npm install
