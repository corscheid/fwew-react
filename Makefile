BUILD_DATE = $(shell date +"%Y-%m-%d")
GIT_BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
COMMIT_SHA = $(shell git rev-parse --short HEAD)
OUTPUT_DIR = ./dist

export EXPO_PUBLIC_GIT_BRANCH      = $(GIT_BRANCH)
export EXPO_PUBLIC_GIT_COMMIT_HASH = $(COMMIT_SHA)
export NODE_ENV=production

default: build

build:
	eas build -p android -e preview --local --output="$(OUTPUT_DIR)/fwew-react-$(GIT_BRANCH)-$(BUILD_DATE)-$(COMMIT_SHA).apk"

build-prod:
	eas build -p android -e production --local --output="$(OUTPUT_DIR)/fwew-react-$(GIT_BRANCH)-$(BUILD_DATE)-$(COMMIT_SHA).aab"

build-remote:
	eas build -p android -e preview

build-prod-remote:
	eas build -p android -e production

build-web:
	yarn run build

run:
	yarn start

run-better:
	yarn start --clear --tunnel

run-offline:
	yarn start --offline

