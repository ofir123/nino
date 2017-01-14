# Nino
*A boilerplate project for front-end development with AngularJS, Angular Material, Pug, Gulp, Flask & Tornado.*

#### Includes:
* [*Angular Material*](https://material.angularjs.org/latest/) - Front-end CSS framework
* [*Stylus*](http://stylus-lang.com/) - CSS pre-processor
* [*Pug*](https://pugjs.org/api/getting-started.html) - HTML pre-processor
* [*Gulp*](http://gulpjs.com/) - Streaming build system

See the ```nino``` folder for more info.

#### Instructions:
* Install ```nodejs```.
* Install ```gulp``` by running ```npm install -g gulp```.
* Go to the ```frontend``` folder and run ```npm install``` to get all the required node modules.
* Go to the ```frontend``` folder and run ```gulp``` to compile front-end assets.
* Run ```gulp watch``` to compile front-end assets and start a livereload server.


* *Optional* - Install the Pug & Stylus plugins for PyCharm.

#### Deployment:
1. Install nginx and add the configuration file to the conf.d directory: `/etc/nginx/conf.d/nino.conf`.
2. Create SSL key files for the server (try [here](http://www.selfsignedcertificate.com)) and put them under /etc/ssl/server.key and /etc/ssl/server.crt.
3. Change the server name in the nginx configuration file to the real server URL.
4. Restart the nginx service.
5. Install by running `python setup.py develop`.
6. Run you project:
	1. Run `npm install` in the `frontend` folder to get all the node modules.
    2. Run `gulp` in the `frontend` folder to build assets.
	3. Copy the service file to the systemd scripts directory: `/usr/lib/systemd/system/`.
	4. Enable the service so the web server will start automatically after reboot: `systemctl enable nino.service`.
	5. Run the web server by starting the service for the first time: `systemctl start nino.service`.
	6. Make sure no error logs were written by checking the journal: `journalctl -u nino.service`.
7. Profit!
