# DevTinder
------
- Created a Vite + React  application.
- Remove any unnecessary premade files and make it accordingly.
- Install tailwind css
- Setup the configurations and check it .
- Component library daisy ui & install it.
- Add Navbar Component to the App.jsx.
- Installed React Router.
------
- Create BrowserRouter > Routes > Route =/Body >RouteChildren.
- Create an Outlet in your body component.
- Create a Footer Component.
- Create a Login Page 
- Install axios
- CORS - install cors in backend => add middleware to with configurations: origin,credentials: true
- Whenever you are making API call so pass axios =>{withCredentials : true}
- Install Redux Toolkit
- Install react-redux + @reduxjs/tookit ==> configureStore==>Provider ==>createSlice =>add reducer to store.
- In Order to make our Profile to remain logged even when refresh ==>Body ==> GET API call to profile view ==>Inside UseEffect ==>add user to store.
- You should not be able to access other routes without login.
- IF token is not present, redirect user to login page.
- Logout Feature
- Profile Page
- Get the feed and add the feed in the store.
- build the user card on feed
- Edit Profile Feature
- Show Toast Message on saving the profile
- New Page -See all my connections
- New Page -See all my requests
- Feature - Accept/Reject Connection Request
- Send/ignore the user card from Feed

Remaining:

- Signup New User
- E2ETesting

## Component Design
- Body
   - Navbar
   - Route=/ ==> Feed
   - Route=/ ==> Login
   - Route=/ ==> Connections
   - Route=/ ==> Profile


## Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-13-60-80-12.eu-north-1.compute.amazonaws.com
- Install your specific node version.
- Git clone
-----
- Frontend
    - npm install --> dependencies install
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html
    - sudo scp -r dist/* /var/www/html/
    - Enable port 80 of our instance
------

- Backend
    - allowed ec2 instance public Ip on mongodb server
    - npm install pm2 -g (globally)
    - pm2 start npm -- start
    - If We have to check logs :pm2 logs
    - Clear the logs : pm2 flush npm
    - to see the processes running : pm2 list
    - to stop a process : pm2 stop npm (name)
    - to delete the process : pm2 delete npm (name)
    - Custom Name : pm2 start npm --name "devTinder/Backend" -- start
    - config nginx sudo nano /etc/nginx/sites-available/default 
    - restart nginx:sudo systemctl restart nginx
    - Modify the BASE_URL
    ---------

    ### Update the config for Mapping:
    - Frontend = http://13.60.80.12/
    - Backend = http://13.60.80.12:3000/
    
    - Domain name = devTinder.com => 13.60.80.12
    
    - FE = devTinder.com
    - BE = devTinder.com:3000 => devtinder.com/api
    - server {
        listen 80 default_server;
        listen [::]:80 default_server;
    
        root /var/www/html;
        index index.html;
    
        server_name _; # This catches all traffic to your IP 13.60.80.12
    
        # Frontend Configuration
        location / {
            try_files $uri $uri/ /index.html;
        }
    
        # Backend API Proxy
        location /api/ {
            proxy_pass http://localhost:3000/; # Note the trailing slash
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
            
            # This helps with getting the real IP of the user in your logs
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
  ## Adding a custom Domain name
  - purchased domain name from godaddy
  - signup on cloudflare
  - change the nameservers on go daddy
  - Point it to cloudflare
