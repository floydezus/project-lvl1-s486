install: install-deps


install-deps:
	npm install

start:
	npx babel-node 'src/bin/brain-even.js'

calc:
	npx babel-node 'src/bin/brain-calc.js'	

lint:
	npx eslint .

publish:
	npm publish --dry-run.
