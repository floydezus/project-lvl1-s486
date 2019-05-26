install: install-deps


install-deps:
	npm install

start:
	npx babel-node 'src/bin/brain-even.js'

calc:
	npx babel-node 'src/bin/brain-calc.js'

gcd:
	npx babel-node 'src/bin/brain-gcd.js'
	
prog:			
	npx babel-node 'src/bin/brain-progression.js'

prime:			
	npx babel-node 'src/bin/brain-prime.js'

lint:
	npx eslint .

publish:
	npm publish --dry-run.
