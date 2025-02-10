build:
	- npm run build
	- rm -rf ../backend-bot/dist
	- mv dist ../backend-bot