
create:
	docker-compose up -d
	docker-compose exec node npm install --save --save-exact react react-dom
	docker-compose exec node npm install --save-dev --save-exact vite

build:
	docker-compose up -d --build
up:
	docker-compose up -d
	docker-compose exec node npm install

down: 
	docker-compose down

stop:
	docker stop $$(docker ps -qa)

dev:
	docker-compose exec node npm run development