install:
	npm ci

bg:
	node bin/brain-games.js

be:
	node bin/brain-even.js

bc:
	node bin/brain-calc.js

gcd:
	node bin/brain-gcd.js
pr:
	node bin/brain-progression.js
	
publish:
	npm publish --dry-run

lint:
	npx eslint .