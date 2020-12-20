.PHONY: install test build clean publish token types npmjs

DOCKER_COMPOSE_RUN_OPTIONS=--rm
ifeq (${CI},true)
    DOCKER_COMPOSE_RUN_OPTIONS=--rm --user root -T
endif

test:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn test

lint:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn lint

build:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn build

npmjs:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) bash -c 'echo "//registry.npmjs.org/:_authToken=$$NPMJS_AUTH_TOKEN" >> .npmrc'
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) bash -c 'echo "@benjaminnoufel:registry=https://registry.npmjs.org/" >> .npmrc'

token:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) bash -c 'echo "//npm.pkg.github.com/:_authToken=$$NPM_AUTH_TOKEN" >> .npmrc'
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) bash -c 'echo "@benjaminnoufel:registry=https://npm.pkg.github.com/" >> .npmrc'

install:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn install


clean:
	@docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) bash -c 'for file in $(shell cat .gitignore); do if [ "/.env" != "$$file" ]; then rm -rf .$$file; fi; done'

publish:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn publish --new-version $(shell cat package.json | grep -i version | sed -e "s/ //g" | cut -c 12- | sed -e "s/\",//g") --non-interactive

publish-npmjs:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn publish --access public --registry https://registry.npmjs.org/ --new-version $(shell cat package.json | grep -i version | sed -e "s/ //g" | cut -c 12- | sed -e "s/\",//g") --non-interactive

types:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn types

