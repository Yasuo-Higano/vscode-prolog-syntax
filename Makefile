install:
	npm install

build:
	npm run compile

release:
	npm run build
	npm run package
