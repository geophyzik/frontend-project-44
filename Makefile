install:
	npm ci

bg:
	node bin/brain-games.js
	
publish:
	npm publish --dry-run