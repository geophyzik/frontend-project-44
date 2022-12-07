install:
	npm ci

bg:
	node bin/brain-games.js

even:
	node bin/brain-even.js

calc:
	node bin/brain-calc.js

gcd:
	node bin/brain-gcd.js

line:
	node bin/brain-progression.js
	
prime:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .