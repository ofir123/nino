# Nino
*A base for front-end development with AngularJS, Jade, Gulp and Flask.*

#### web-boilerplate includes:

* **Application**
	* Bootstrap - Front-end CSS framework
	* Stylus - CSS pre-processor
	* Jade - Html pre-processor
	* Gulp - Streaming build system

See ```nino``` folder for more info.

* **Testing**
	* Karma - Unit tests.

#### Instructions:
* Install ```nodejs```.
* Install ```gulp``` by running ```npm install -g gulp```.
* Go to the ```frontend``` folder and run ```npm install``` to get all the required node modules.
* Go to the ```frontend``` folder and run ```gulp``` to compile front-end assets.
* Run ```gulp watch``` to compile front-end assets and start a livereload server.

* Install the jade plugin for PyCharm

#### Deployment:
0. Create a virutal python environment for the project:
	1. `mkdir /opt/{project_name}`
	2. `cd /opt/{project_name}`
	3. `virtualenv env`
	4. `mkdir env/ssh`
	5. Run `ssh-keygen`, and save the key to `/opt/{project_name}/env/ssh/id_rsa`
	6. Add the following line to `env/bin/activate`:
	
			alias ssh="ssh -i \"$VIRTUAL_ENV/ssh/id_rsa\""
	
	7. Add content of `id_rsa.pub` to each project you would like to clone.

1. Activate the virtual environment:
	1. `source  /opt/{project_name}/env/bin/activate`

2. Clone the project code using SSH.

3. Run `python setup.py devlop` as needed.

4. Run you project
	1. Run `npm install` in the `frontend` folder to get all the node modules.
    2. Run `gulp` in the `frontend` folder to build assets
	3. Run the web server
