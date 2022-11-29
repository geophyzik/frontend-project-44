install:
	npm ci

bg:
	node bin/brain-games.js

be:
	node bin/brain-even.js
	
publish:
	npm publish --dry-run

lint:
	npx eslint .